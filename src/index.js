import React from "react";
import ReactDOM from "react-dom";
import { Router, Switch, Route } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
import Header from "./components/Header";
import App from "./components/App";
import Jokes from "./components/Jokes";
import MusicMaster from "./components/MusicMaster";
import "./index.css";

ReactDOM.render(
  <Router history={createBrowserHistory()}>
    <Switch>
      <Route
        exact
        path="/"
        render={() => (
          <Header>
            <App />
          </Header>
        )}
      />
      <Route
        path="/jokes"
        render={() => (
          <Header>
            <Jokes />
          </Header>
        )}
      />
      <Route
        path="/music_master"
        render={() => (
          <Header>
            <MusicMaster />
          </Header>
        )}
      />
    </Switch>
  </Router>,
  document.getElementById("root")
);
