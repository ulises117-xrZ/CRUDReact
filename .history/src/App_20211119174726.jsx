import React from "react";
import "react-bootstrap";

import { AuthProvider } from "./Context/authProvider";
import RoutesPage from "./routes/Index";

function App() {
  return (
    <AuthProvider>
  
    </AuthProvider>
  );
}

export default App;
