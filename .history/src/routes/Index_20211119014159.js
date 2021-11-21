import React from "react";
import { BrowserRouter as Router, Route,  Routes} from "react-router-dom";
import Home from "../screens/Home";
import NotFound from "../screens/NotFound";
import Profile from "../screens/Profile";

export default function RoutesPage() {
  return (
    <Router>
      <header></header>
      <Routes>
        <Route exact path="/profile" component = {Profile}></Route>
        <Route exact path="/" component = {Home} ></Route>
        <Route exact path = "*" component = {NotFound} />
      </Routes>
    </Router>
  );
}
