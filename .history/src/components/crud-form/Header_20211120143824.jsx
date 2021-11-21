import React from "react";
import { NavLink } from "react-router-dom";
import {Navbar, Container, Nav} from 'react-bootstrap';

export const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Task Manager</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link>
          <NavLink to = "/" style = {{color: "red"}}>Home</NavLink>
      </Nav.Link>
      <Nav.Link>
          <NavLink to = "/profile">profile</NavLink>
      </Nav.Link>
 
    </Nav>
    </Container>
  </Navbar>
  );
};
