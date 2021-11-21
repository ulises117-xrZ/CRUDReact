import React, {useState, useEffect} from "react";
import "react-bootstrap";
import Login from "./screens/Login";
import {onAuthStateChanged, getAuth} from 'firebase/auth';
import app from "./firebase/firebase";
import RoutesPage from "./routes/Index";
import { AuthProvider } from "./Context/authProvider";
function App() {
  
  return (
    <AuthProvider>
    <RoutesPage />
     </AuthProvider>
  );
}

export default App;
