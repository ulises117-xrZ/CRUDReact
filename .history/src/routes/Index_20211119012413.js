import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../screens/Home";
import Profile from "../screens/Profile";

export default function Routes() {
  return (
    <Router>
      <header></header>
      <Switch>
        <Route exact path="/profile" component = {Profile}></Route>
        <Route exact path="/" component = {Home} ></Route>
        <Route exact path = "*" component = {notFound} />
      </Switch>
    </Router>
  );
}