import React, {useState, useEffect} from "react";
import Home from "./screens/Home";
import 'react-bootstrap';
import Login from "./screens/Login";
import {getAuth, onAuthStateChanged} from 'firebase/auth';
import app from "./firebase/firebase";
const auth = getAuth(app);

function App() {
  const [usuarioGlobal, setUsuarioGlobal] = useState(null);
  return(
    <>
    {
      usuarioGlobal ? 
      <Home /> :
      <Login />
    }
    </>
  );
}

export default App;
