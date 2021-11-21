import React from "react";
import { BrowserRouter as Router, Route,  Routes as Switch} from "react-router-dom";
import Home from "../screens/Home";
import NotFound from "../screens/NotFound";
import Profile from "../screens/Profile";
import Login from "../screens/Login";
export default function RoutesPage() {
  return (
    <Router>
      <header></header>
      <Switch>
        <Route exact path = "/profile" element = {<Profile/>} />
        <Route exact path = "/" element = {<Home/>} />
        <Route exact path = "/*" element = {<NotFound />} />
      </Switch>
    </Router>
  );
}
