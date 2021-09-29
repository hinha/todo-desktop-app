package system

import "os"

type File struct{}

func (s *File) Executable() (string, error) {
	return os.Executable()
}

func (s *File) Exit(exitCode int) {
	os.Exit(exitCode)
}
