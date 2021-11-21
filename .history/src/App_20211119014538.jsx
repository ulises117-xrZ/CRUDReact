import React, { useState } from "react";
import Home from "./screens/Home";
import "react-bootstrap";
import Login from "./screens/Login";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from "./firebase/firebase";
import { AuthProvider } from "./Context/authProvider";
import Routes from "./routes/Index";
import RoutesPage from "./routes/Index";
const auth = getAuth(app);

function App() {
  const [usuarioGlobal, setUsuarioGlobal] = useState(null);
  onAuthStateChanged(auth, (userFirebase) => {
    if (userFirebase) {
      setUsuarioGlobal(userFirebase);
    } else {
      setUsuarioGlobal("");
    }
  });
  return (
    <AuthProvider>
    <RoutesPage></RoutesPage>
    </AuthProvider>
  );
}

export default App;
