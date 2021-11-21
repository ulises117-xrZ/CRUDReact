import React from "react";
import { Navigate, Route } from "react-router";
import { useAuth } from "../Context/authProvider";
import Home from "../screens/Home";

export default function RequireAuth({ component: Component, ...rest }) {
  let auth = useAuth();

  {
    <Route
      rest
     />
  }
}
