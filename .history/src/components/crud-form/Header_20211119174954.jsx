import React from "react";
import { useAuth } from "../../Context/authProvider";

export const Header = () => {
    const auth = useAuth();
  return (
    <div>
      <div>
        <h1 className="text-center">Welcome Back</h1>
        <h2 className="text-center" style={{ fontSize: "20px" }}>
          {correoUsuario}
        </h2>
      </div>
    </div>
  );
};
