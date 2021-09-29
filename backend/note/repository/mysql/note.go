package mysql

import (
	"github.com/hinha/todo-desktop-app/backend/domain"
	"gorm.io/gorm"
)

type noteBookRepository struct {
	db *gorm.DB
}

func New(db *gorm.DB) domain.NoteBookRepository {
	return &noteBookRepository{db: db}
}
