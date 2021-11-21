import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useAuth } from "../Context/authProvider";
export default function PrivateRoute({ component: Component, ...rest }) {
  const auth = useAuth();
  return (
    <Route {...rest}>
      {auth.isLoggued() ? <Component /> : <Navigate to="/login" />}
    </Route>
  );
}
