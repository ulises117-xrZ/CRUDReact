import React from "react";
import "react-bootstrap";


import RoutesPage from "./routes/Index";
import { AuthProvider, useAuth } from "./Context/authProvider";
import Login from "./screens/Login";
function App() {
  const authContext = useAuth();
  return (
    <AuthProvider>

      authContext.user ?     <RoutesPage />

     </AuthProvider>
  );
}

export default App;
