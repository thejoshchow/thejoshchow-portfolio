import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

import React from "react";

const NavBar = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Navbar id="navbar" className="navbar-top" expand="md" sticky="top">
      <Container className="d-flex align-items-center">
        <Navbar.Brand
          className="mx-3 nav-brand"
          onClick={() => scrollToSection("hero")}
          style={{ cursor: "pointer" }}
        >
          <img src="jmc-logo.png" width="30px" height="30px" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="me-auto">
            <Nav.Item onClick={() => scrollToSection("about")}>about</Nav.Item>
            <Nav.Item onClick={() => scrollToSection("projects")}>
              projects
            </Nav.Item>
            <Nav.Item onClick={() => scrollToSection("contact")}>
              contact
            </Nav.Item>
            {/* <Nav.Item href="public/chow_joshua.pdf">resume</Nav.Item> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
