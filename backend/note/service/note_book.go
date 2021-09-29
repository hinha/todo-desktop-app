package service

import "github.com/hinha/todo-desktop-app/backend/domain"

type noteBookService struct {
	noteBookRepo domain.NoteBookRepository
}

func (s *noteBookService) HelloWorld() string {
	return "Hello world"
}

// NewNoteBookService will create new an notebookService object
func NewNoteBookService(nb domain.NoteBookRepository) domain.NotebookService {
	return &noteBookService{noteBookRepo: nb}
}
