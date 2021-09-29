package service

import (
	"github.com/sirupsen/logrus"
	"time"

	"github.com/hinha/todo-desktop-app/backend/domain"
)

type noteBookLogger struct {
	logger *logrus.Entry
	next   domain.NotebookService
}

func (s *noteBookLogger) HelloWorld() string {
	defer func(begin time.Time) {
		s.logger.WithFields(logrus.Fields{
			"took": time.Since(begin),
		}).Info("HelloWorld")
	}(time.Now())
	return s.next.HelloWorld()
}

// NewNotebookLogger returns a new instance of a logging Service.
func NewNotebookLogger(logger *logrus.Entry, s domain.NotebookService) domain.NotebookService {
	return &noteBookLogger{next: s, logger: logger}
}
