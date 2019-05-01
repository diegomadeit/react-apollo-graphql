import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FilmList from "./components/FilmList";

export const Routes = () => (
  <Router>
    <Switch>
      <Route path="/" component={FilmList} />
    </Switch>
  </Router>
);

export default Routes;
