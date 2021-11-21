import React from 'react';
import { Navigate } from 'react-router';
import { useAuth } from '../Context/authProvider';

export default function RequireAuth({ children }) {
  let auth = useAuth();
  console.log(auth);
  console.log(children);
  if (!auth.user) {

    return <Navigate to="/login" />;
  }

  return children;
}