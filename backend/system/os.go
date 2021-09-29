package system

import (
	"github.com/wailsapp/wails"
	"os"
	"path"
	"runtime"
)

type OS struct {
	wails *wails.App
}

func New(w *wails.App) *OS {
	if runtime.GOOS == "linux" {
		linuxEnvironment()
	} else if runtime.GOOS == "windows" {
		windowsEnvironment()
	}
	return &OS{wails: w}
}

func linuxEnvironment() {
	home, err := os.UserHomeDir()
	if err != nil {
		panic(err)
	}
	dir(home)
}

func windowsEnvironment() {
	home := os.Getenv("HOMEDRIVE") + os.Getenv("HOMEPATH")
	if home == "" {
		home = os.Getenv("USERPROFILE")
	}
	dir(home)
}

func dir(home string) {
	home = path.Join(home, ".corp_keep")

	if _, err := os.Stat(home); os.IsNotExist(err) {
		if err := os.Mkdir(home, os.ModePerm); err != nil {
			panic(err)
		}
	}
}

func (s *OS) Run() error {
	return s.wails.Run()
}
