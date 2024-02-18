import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

import React from "react";

const NavBar = () => {
  return (
    <>
      <Navbar id="navbar" className="navbar-top">
        <Container className="d-flex">
          <Nav className="d-flex justify-content-around">
            <Nav.Link className="mx-3" to="#">
              About
            </Nav.Link>
            <Nav.Link className="mx-3" to="#">
              Projects
            </Nav.Link>
            <Nav.Link className="mx-3" to="#">
              Contact
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
