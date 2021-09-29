package handler

import (
	"github.com/hinha/todo-desktop-app/backend/domain"
	"github.com/wailsapp/wails"
)

type noteBookHandler struct {
	noteBook domain.NotebookService
}

func (h *noteBookHandler) Basic() (string, error) {
	return h.noteBook.HelloWorld(), nil
}

func (h *noteBookHandler) WailsInit(runtime *wails.Runtime) (err error) {
	return
}

func NewNoteBookHandler(nb domain.NotebookService) domain.NoteBookHandler {
	return &noteBookHandler{noteBook: nb}
}
