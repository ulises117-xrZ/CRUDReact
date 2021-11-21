import React from "react";
import "react-bootstrap";


import RoutesPage from "./routes/Index";
import { AuthProvider } from "./Context/authProvider";
function App() {
  
  return (
    <AuthProvider>
    <RoutesPage />
     </AuthProvider>
  );
}

export default App;
