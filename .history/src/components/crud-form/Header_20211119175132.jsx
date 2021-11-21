import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../Context/authProvider";

export const Header = () => {
    const auth = useAuth();
  return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/Profile">Home</NavLink>
                </li>
            </ul>
        </nav>
  );
};
