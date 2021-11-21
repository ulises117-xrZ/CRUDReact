import React from "react";
import "react-bootstrap";


import RoutesPage from "./routes/Index";
import { AuthProvider, useAuth } from "./Context/authProvider";
import Login from "./screens/Login";
function App() {

  return (
    <AuthProvider>

    <RoutesPage />

     </AuthProvider>
  );
}

export default App;
