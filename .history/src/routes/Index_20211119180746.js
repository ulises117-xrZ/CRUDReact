import React from "react";
import { BrowserRouter as Router, Route,  Routes} from "react-router-dom";
import Home from "../screens/Home";
import NotFound from "../screens/NotFound";
import Profile from "../screens/Profile";
import Login from "../screens/Login";
import PrivateRoute from "./PrivateRoute";
export default function RoutesPage() {
  return (
    <Router>
      <header></header>
      <Routes>
        <Route exact path="/profile" element = {<Profile/>}></Route>
        <Route exact path = "/" element = {<Home/>}></Route>        
        <Route exact path = "*" element = {<NotFound />}/></Routes>
      </Routes>
    </Router>
  );
}
