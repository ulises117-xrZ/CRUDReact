import React, {useState, useEffect} from "react";
import Home from "./screens/Home";
import 'react-bootstrap';



function App() {
  const [usuarioGlobal, setUsuarioGlobal] = useState(null);
  return(
    <>
      <Home />
    </>
  );
}

export default App;
