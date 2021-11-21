import React from "react";

export const Header = () => {
  return (
    <div>
      <section className="d-sm-flex justify-content-sm-around align-items-center">
        <div>
          <h1 className="text-center">Welcome Back</h1>
          <h2 className="text-center" style={{ fontSize: "20px" }}>
            {correoUsuario}
          </h2>
        </div>
 
    </div>
  );
};
