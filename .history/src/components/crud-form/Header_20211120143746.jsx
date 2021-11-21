import React from "react";
import { NavLink } from "react-router-dom";
import {Navbar, Container, Nav} from 'react-bootstrap';

export const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Task Manager</Navbar.Brand>
    <Nav className="me-auto">
   
          <NavLink to = "/">Home</NavLink>

          <NavLink to = "/profile">profile</NavLink>

 
    </Nav>
    </Container>
  </Navbar>
  );
};
