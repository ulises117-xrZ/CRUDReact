import React from "react";
import "react-bootstrap";
import Login from './screens/Login';
import { AuthProvider } from "./Context/authProvider";

function App() {
  return (
    <AuthProvider>
    
    </AuthProvider>
  );
}

export default App;
