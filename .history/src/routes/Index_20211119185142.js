import React from "react";
import { BrowserRouter as Router, Route,  Routes as Switch} from "react-router-dom";
import Home from "../screens/Home";
import { Header } from "../components/crud-form/Header";
import RequireAuth from './PrivateRoute';
import NotFound from "../screens/NotFound";
import Profile from "../screens/Profile";
import Login from "../screens/Login";
export default function RoutesPage() {
  
  return (
    <Router>
    <Header></Header>
      <Switch>
        <Route exact path = "/profile" element = {<RequireAuth><Profile /></RequireAuth>} />
        <Route exact path = "/home" element = {<RequireAuth><Home /></RequireAuth>} />
        <Route exact path = "/*" element = {<NotFound />} />
        <Route exact path = "/login" element = {<Login />} />
      </Switch>
    </Router>
  );
}
