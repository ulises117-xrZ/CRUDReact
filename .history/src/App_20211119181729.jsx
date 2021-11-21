import React, {useState, useEffect} from "react";
import "react-bootstrap";
import Login from './screens/Login';
import Home from './screens/Home';
import { AuthProvider} from "./Context/authProvider";
import {onAuthStateChanged, getAuth} from 'firebase/auth';
import app from "./firebase/firebase";
import RoutesPage from "./routes/Index";
const auth = getAuth(app);
function App() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  onAuthStateChanged(auth, (userFirebase) => {
    if (userFirebase) {
      setUser(userFirebase);
    } else {
      setUser(null);
    }
  });
  
  useEffect(() => {
    try {
      localStorage.setItem("user", JSON.stringify(user));
    } catch (error) {
      localStorage.removeItem("user");
    }
  }, [user]);
  return (
    <AuthProvider>
    <RoutesPage />
    </AuthProvider>
  );
}

export default App;
