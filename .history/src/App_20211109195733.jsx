import React, { useState} from "react";
import Home from "./screens/Home";
import "react-bootstrap";
import Login from "./screens/Login";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from "./firebase/firebase";
const auth = getAuth(app);

function App() {
  const [usuarioGlobal, setUsuarioGlobal] = useState(null);
  onAuthStateChanged(auth, (userFirebase) => {
    if (userFirebase) {
      //codigo en caso de que exista
      setUsuarioGlobal(userFirebase);
    } else {
      //codigo en caso de que no exista
      setUsuarioGlobal("");
    }
  });
  return (
    <>
      {usuarioGlobal ? (
        <Home correoUsuario={usuarioGlobal.email} />
      ) : (
        <Login />
      )}
    </>
  );
}

export default App;
