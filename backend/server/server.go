package server

import (
	"github.com/hinha/todo-desktop-app/backend/domain"
	"github.com/hinha/todo-desktop-app/backend/note/handler"
	"github.com/hinha/todo-desktop-app/backend/system"
	"github.com/wailsapp/wails"
)

type Server struct {
	NoteBook domain.NotebookService
	app      *system.OS
}

func New(appConfig *wails.AppConfig, nb domain.NotebookService) *Server {
	s := &Server{
		NoteBook: nb,
	}

	app := wails.CreateApp(appConfig)
	os := system.New(app)
	app.Bind(handler.NewNoteBookHandler(s.NoteBook))
	s.app = os

	return s
}

func (s *Server) Run() error {
	return s.app.Run()
}
