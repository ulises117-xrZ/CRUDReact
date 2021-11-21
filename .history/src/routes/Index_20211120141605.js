import React from "react";
import { BrowserRouter as Router, Route,  Routes as Switch} from "react-router-dom";
import Home from "../screens/Home";
import { Header } from "../components/crud-form/Header";
import RequireAuth from './PrivateRoute';
import NotFound from "../screens/NotFound";
import Profile from "../screens/Profile";
import Login from "../screens/Login";
import { useAuth } from "../Context/authProvider";
export default function RoutesPage() {
  const authContext = useAuth();
  return (
    {
    }
    );
}
