package domain

import (
	"database/sql/driver"
	"github.com/wailsapp/wails"
	"gorm.io/gorm"
	"time"

	uuid "github.com/satori/go.uuid"
)

type Notebook struct {
	gorm.Model
	ID         string       `json:"id" gorm:"type:varchar(50);primaryKey"`
	Title      string       `json:"title" gorm:"type:text;not null"`
	Categories []Category   `gorm:"foreignKey:NotebookID"`
	Status     []NoteStatus `gorm:"foreignKey:NotebookID"`
	UserID     string
}

type NoteBookRepository interface {
}

type NotebookService interface {
	HelloWorld() string
}

type NoteBookHandler interface {
	Basic() (string, error)
	WailsInit(runtime *wails.Runtime) error
}

type Category struct {
	ID         string    `json:"id" gorm:"type:varchar(25);primaryKey"`
	Name       string    `json:"name" gorm:"type:varchar(25);default:''"`
	CreatedAt  time.Time `json:"created_at" gorm:"not null;"`
	DeletedAt  gorm.DeletedAt
	NotebookID string
	NoteID     string
}

type Note struct {
	gorm.Model
	ID           string       `json:"id" gorm:"type:varchar(50);primaryKey"`
	Title        string       `json:"title" gorm:"type:text;"`
	Content      string       `json:"content" gorm:"type:text"`
	DeleteStatus bool         `json:"delete_status" gorm:"default:false"`
	Categories   []Category   `gorm:"foreignKey:NoteID"`
	Status       []NoteStatus `gorm:"foreignKey:NotebookID"`
}

// BeforeCreate will set a UUID rather than numeric ID.
func (base *Note) BeforeCreate(_ *gorm.DB) (err error) {
	base.ID = uuid.NewV4().String()
	return
}

type NoteLabel string

const (
	NoteACTIVE   NoteLabel = "active"
	NoteHold     NoteLabel = "on hold"
	NoteComplete NoteLabel = "completed"
	NoteDropped  NoteLabel = "dropped"
	NoteArchived NoteLabel = "archived"
	NoteEmpty    NoteLabel = "empty"
)

func (e *NoteLabel) Scan(value interface{}) error {
	*e = NoteLabel(value.([]byte))
	return nil
}

func (e NoteLabel) Value() (driver.Value, error) {
	return string(e), nil
}

type NoteStatus struct {
	ID         string    `json:"id" gorm:"type:varchar(50);primaryKey"`
	Name       NoteLabel `json:"name" gorm:"type:enum('active','on hold','completed','dropped','archived','empty');default:'empty'"`
	NotebookID string
	NoteID     string
}

func (base *NoteStatus) TableName() string {
	return "note_status"
}
