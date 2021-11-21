import React from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/Profile">Profile</NavLink>
                </li>
            </ul>
        </nav>
  );
};
