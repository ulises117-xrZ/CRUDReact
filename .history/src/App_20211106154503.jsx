import React, {useState, useEffect} from "react";
import Home from "./screens/Home";
import 'react-bootstrap';
import Login from "./screens/Login";



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
