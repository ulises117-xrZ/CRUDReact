import React from "react";
import { NavLink } from "react-router-dom";
import {Navbar, Container, Nav} from 'react-bootstrap';
import {FaTasks, FaHome} from 'react-icons/fa';
import {CgProfile} from 'react-icons/cg';
export const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand><NavLink to = "/" style = {{color: "#fff", fontFamily: "cursive"}}><FaTasks/> Task Manager</NavLink></Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link>
          <NavLink to = "/" style = {{color: "yellow", fontFamily: "cursive"}}><FaHome/>Home</NavLink>
      </Nav.Link>
      <Nav.Link>
          <NavLink to = "/profile" style= {{color: "yellow", fontFamily: "cursive"}} ><CgProfile />profile</NavLink>
      </Nav.Link>
 
    </Nav>
    </Container>
  </Navbar>
  );
};
