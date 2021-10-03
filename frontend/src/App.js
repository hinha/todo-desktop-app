import React, { Suspense } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { PouchDB } from "react-pouchdb";

import "./App.css";
import MainEditor from "./components/editor/Main";
import Sidebar from "./components/sidebar/Sidebar";
import MainBooks from "./components/books/Main";

function App() {
  return (
    <Suspense fallback="loading...">
      <div id="app" className="app">
        <PouchDB name="todo">
          <Router>
            <Sidebar />
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => (
                  <MainBooks {...props} notes bookTitle="All Notes" />
                )}
              />
              <Route
                exact
                path="/trash"
                render={(props) => (
                  <MainBooks {...props} trash bookTitle="Trash" />
                )}
              />
            </Switch>
            <MainEditor />
          </Router>
        </PouchDB>
      </div>
    </Suspense>
  );
}

export default App;
