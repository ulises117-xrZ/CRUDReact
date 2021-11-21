import React from "react";
import "react-bootstrap";
import Login from './screens/Login';
import { AuthProvider, useAuth } from "./Context/authProvider";

function App() {
  const auth = useAuth();
  console.log(auth)
  return (
    <AuthProvider>
      <Login />
    </AuthProvider>
  );
}

export default App;
