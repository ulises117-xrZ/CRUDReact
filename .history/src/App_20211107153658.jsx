import React, {useState, useEffect} from "react";
import Home from "./screens/Home";
import 'react-bootstrap';
import Login from "./screens/Login";
import {getAuth, onAuthStateChanged} from 'firebase/auth';
import app from "./firebase/firebase";
const auth = getAuth(app);

function App() {
  const [usuarioGlobal, setUsuarioGlobal] = useState(null);
  const [nombreUsuario, setNombreUsuario] = useState("");
  onAuthStateChanged(auth,(userFirebase)=>{
    if(userFirebase){
      //codigo en caso de que exista
      setUsuarioGlobal(userFirebase);
      setNombreUsuario(userFirebase.displayName);
    }else{
      //codigo en caso de que no exista
      setUsuarioGlobal(null);
    }
  })
  return(
    <>
    {
      usuarioGlobal ? 
      <Home nombreUsuario = {nombreUsuario} /> :
      <Login />
    }
    </>
  );
}

export default App;
