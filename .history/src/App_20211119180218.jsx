import React, {useState} from "react";
import "react-bootstrap";
import Login from './screens/Login';
import { AuthProvider} from "./Context/authProvider";
import {onAuthStateChanged} from 'firebase/auth';

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
      <Login />
    </AuthProvider>
  );
}

export default App;
