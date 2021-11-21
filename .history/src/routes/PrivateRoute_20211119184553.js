import React from 'react';
import { Navigate } from 'react-router';
import { useAuth } from '../Context/authProvider';

export default function RequireAuth({ children }) {
  let auth = useAuth();
  // if (!auth.contextValue.user) {

  //   return <Navigate to="/login" />;
  // }

  return children;
}