package main

import (
	_ "embed"
	"fmt"
	"time"

	"github.com/wailsapp/wails"
)

func basic() string {
	return "World!"
}

//go:embed frontend/build/static/js/main.js
var js string

//go:embed frontend/build/static/css/main.css
var css string

func main() {

	app := wails.CreateApp(&wails.AppConfig{
		Width:  1024,
		Height: 768,
		Title:  "todo-desktop-app",
		JS:     js,
		CSS:    css,
		// Colour: "#131313",
		Colour:    "#ffffff",
		Resizable: true,
		MinWidth:  480,
		MinHeight: 560,
	})
	app.Bind(basic)
	app.Run()
}

type MyStruct struct{}

func (m *MyStruct) WailsInit(runtime *wails.Runtime) error {
	// runtime.Window.
	t := time.Now()
	message := fmt.Sprintf("I was initialised at %s", t.String())
	runtime.Events.Emit("initialised", message)
	return nil
}
