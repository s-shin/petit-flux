import React from "react";
import {Route, DefaultRoute} from "react-router";
import App from "./components/App";
import Home from "./components/pages/Home";
import Active from "./components/pages/Active";
import Completed from "./components/pages/Completed";

export default (
  <Route path="/" name="home" handler={App}>
    <DefaultRoute handler={Home} />
    <Route name="active" handler={Active} />
    <Route name="completed" handler={Completed} />
  </Route>
);
