import React from "react";
import { Navigate } from "react-router";
import { useAuth } from "../Context/authProvider";
import Home from "../screens/Home";

export default function RequireAuth({ children }) {
  let auth = useAuth();

  {
    auth.user ? <Home /> : <Navigate to="/login" />;
  }
}
