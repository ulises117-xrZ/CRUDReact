import React from "react";
import "react-bootstrap";

import { AuthProvider } from "./Context/authProvider";
import RoutesPage from "./routes/Index";

function App() {

  return (
    <AuthProvider>
    <RoutesPage></RoutesPage>
    </AuthProvider>
  );
}

export default App;
