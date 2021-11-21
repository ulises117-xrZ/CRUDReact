import React from 'react';
import { Navigate, useLocation } from 'react-router';
import { useAuth } from '../Context/authProvider';

export default function RequireAuth({ children }) {
  let auth = useAuth();
  const location = useLocation();
  if (!auth.isLogged()) {

    return <Navigate to="/login" />;
  }

  return children;
}