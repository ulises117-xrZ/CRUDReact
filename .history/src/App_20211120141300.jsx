import React from "react";
import "react-bootstrap";


import RoutesPage from "./routes/Index";
import { AuthProvider, useAuth } from "./Context/authProvider";
import Login from "./screens/Login";
function App() {
  const authContext = useAuth();
  console.log(authContext);
  return (
    <AuthProvider>

    <RoutesPage />

     </AuthProvider>
  );
}

export default App;
