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
    <>
      <Navbar
        id="navbar"
        collapseOnSelect
        className="navbar-top"
        // expand="md"
        sticky="top"
      >
        <Container className="d-flex">
          <Nav className="d-flex justify-content-around align-items-center">
            <Navbar.Brand
              className="mx-3 nav-brand logo"
              onClick={() => scrollToSection("hero")}
              style={{ cursor: "pointer" }}
            >
              <img src="jmc-logo.png" width="30px" height="30px" alt="logo" />
            </Navbar.Brand>
            <Nav.Item className="mx-3" onClick={() => scrollToSection("about")}>
              about
            </Nav.Item>
            <Nav.Item
              className="mx-3"
              onClick={() => scrollToSection("projects")}
            >
              projects
            </Nav.Item>
            <Nav.Item
              className="mx-3"
              onClick={() => scrollToSection("contact")}
            >
              contact
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
