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
      <Navbar id="navbar" className="navbar-top" expand="lg" sticky="top">
        <Container className="d-flex">
          <Nav className="d-flex justify-content-around align-items-center">
            <Nav.Item
              className="mx-3 nav-brand"
              onClick={() => scrollToSection("hero")}
            >
              J M C
            </Nav.Item>
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
