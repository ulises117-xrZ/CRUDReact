import React from 'react';
import { Navigate } from 'react-router';
import { useAuth } from '../Context/authProvider';

function RequireAuth({ children }) {
  let auth = useAuth();

  if (!auth.user) {

    return <Navigate to="/login" />;
  }

  return children;
}