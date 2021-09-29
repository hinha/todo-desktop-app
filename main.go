package main

import (
	_ "embed"
	"fmt"
	"os"
	"time"

	_ "github.com/go-sql-driver/mysql"
	log "github.com/sirupsen/logrus"
	"github.com/wailsapp/wails"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
	gormLogger "gorm.io/gorm/logger"

	"github.com/hinha/todo-desktop-app/backend/domain"
	_noteBookRepo "github.com/hinha/todo-desktop-app/backend/note/repository/mysql"
	_noteBookService "github.com/hinha/todo-desktop-app/backend/note/service"
	"github.com/hinha/todo-desktop-app/backend/server"
)

func basic() string {
	return "World!"
}

//go:embed frontend/build/static/js/main.js
var js string

//go:embed frontend/build/static/css/main.css
var css string

func main() {

	var (
		//appSecret = envString("APP_SECRET", "secret")
		dbUser = envString("DB_USER", "user")
		dbPass = envString("DB_PASS", "password")
		dbName = envString("DB_NAME", "admin")
		dbHost = envString("DB_HOST", "127.0.0.1")
	)

	logger := log.New()
	logger.Formatter = new(log.TextFormatter)
	logger.Formatter.(*log.TextFormatter).DisableColors = true
	logger.Formatter.(*log.TextFormatter).FullTimestamp = true
	logger.Level = log.TraceLevel
	logger.WithField("ts", logger.WithTime(time.Now()))

	dsn := fmt.Sprintf("%s:%s@tcp(%s:3306)/%s?charset=utf8mb4&parseTime=True&loc=Local", dbUser, dbPass, dbHost, dbName)
	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{
		Logger: gormLogger.Default.LogMode(gormLogger.Silent),
	})
	if err != nil {
		log.Fatal(err.Error())
	}
	if err := db.AutoMigrate(&domain.User{}, &domain.Notebook{}, &domain.Note{}, &domain.Category{}, &domain.NoteStatus{}); err != nil {
		panic(err)
	}

	// Repository
	noteBookRepo := _noteBookRepo.New(db)

	// Service/Uses case
	noteBookService := _noteBookService.NewNoteBookService(noteBookRepo)
	noteBookService = _noteBookService.NewNotebookLogger(logger.WithField("component", "notebook"), noteBookService)

	// Serve
	srv := server.New(&wails.AppConfig{
		Width:     1024,
		Height:    768,
		Title:     "Keep",
		JS:        js,
		CSS:       css,
		Colour:    "#ffffff",
		Resizable: true,
		MinWidth:  680,
		MinHeight: 560,
	}, noteBookService)

	srv.Run()
}

func envString(env, fallback string) string {
	e := os.Getenv(env)
	if e == "" {
		return fallback
	}
	return e
}
