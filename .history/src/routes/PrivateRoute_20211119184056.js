import React from 'react';
import { Navigate, Route } from 'react-router';
import { useAuth } from '../Context/authProvider';
import Home from '../screens/Home';

export default function RequireAuth({ children }) {
  let auth = useAuth();
  console.log(children);
  if (!auth.user) {

    return <Navigate to="/login" />;
  }

  return <Route exact path= "/" element = {<Home />} />;
}