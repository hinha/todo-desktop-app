package server

import (
	"github.com/wailsapp/wails"
	"path/filepath"

	"github.com/hinha/todo-desktop-app/backend"
	"github.com/hinha/todo-desktop-app/backend/system"
)

type API struct {
	logger  backend.Logger
	browser backend.Browser
	window  backend.Window
	sys     backend.System
}

func (a *API) getExecDirectory() (string, error) {
	ex, err := a.sys.Executable()
	return filepath.Dir(ex) + "/", err
}

func (a *API) Init(browser backend.Browser, window backend.Window, logger backend.Logger, system backend.System) error {
	a.browser = browser
	a.window = window
	a.logger = logger
	a.sys = system

	etwDir, err := a.getExecDirectory()
	if err != nil {
		return err
	}
	a.logger.Infof("ETW/Current directory: %s", etwDir)

	return nil
}

func (a *API) WailsInit(runtime *wails.Runtime) error {
	return a.Init(runtime.Browser, runtime.Window, runtime.Log.New("API"), &system.File{})
}
