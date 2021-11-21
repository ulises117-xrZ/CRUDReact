import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../Context/authProvider";

export const Header = () => {
  return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/home">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/Profile">Profile</NavLink>
                </li>
            </ul>
        </nav>
  );
};
