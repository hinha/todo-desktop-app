import React from "react";
// import logo from "./logo.png";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import NoteGroup from "./components/notes/Note";
// import HelloWorld from "./components/HelloWorld";

function App() {
  return (
    <div id="app" className="app">
      <Sidebar />
      <div className="react-resizable"></div>
      <NoteGroup />
    </div>
  );
}

export default App;
