import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import { FaTasks, FaHome } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
export const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <NavLink to="/" style={{ color: "#fff", fontFamily: "cursive" }}>
            <FaTasks /> Task Manager
          </NavLink>
        </Navbar.Brand>
        <Nav className="me-auto">
          <NavLink to="/" style={{ color: "#fff", fontFamily: "cursive" }} className = "mr-4">
            <FaHome /> Home
          </NavLink>

          <NavLink
            to="/profile"
            style={{ color: "#fff", fontFamily: "cursive" }}
          >
            <CgProfile /> profile
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
};
