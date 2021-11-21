import React from "react";
import "react-bootstrap";


import RoutesPage from "./routes/Index";
import { AuthProvider, useAuth } from "./Context/authProvider";
function App() {
  const authContext = useAuth();
  return (
    <AuthProvider>

    <RoutesPage />
     </AuthProvider>
  );
}

export default App;
