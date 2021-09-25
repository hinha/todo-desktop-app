import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import MainEditor from "./components/editor/Main";
import Sidebar from "./components/sidebar/Sidebar";
import Notes from "./pages/Notes";
import Trash from "./pages/Trash";

function App() {
  return (
    <div id="app" className="app">
      <Router>
        <Sidebar />
        <Switch>
          <Route exact path="/" component={Notes} />
          <Route exact path="/trash" component={Trash} />
        </Switch>
        <MainEditor />
      </Router>
    </div>
  );
}

export default App;
