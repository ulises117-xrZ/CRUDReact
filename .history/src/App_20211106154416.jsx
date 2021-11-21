import React, {useState, useEffect} from "react";
import Home from "./screens/Home";
import 'react-bootstrap';



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
