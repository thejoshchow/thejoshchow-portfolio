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
            <Nav.Item>
              <a className="nav-button" role="button" href="../chow_joshua.pdf">
                resume
              </a>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    // <div
    //   id="navbar"
    //   className="navbar-top navbar navbar-expand-md navbar-light sticky-top"
    // >
    //   <div className="container d-flex align-items-center">
    //     <div
    //       className="navbar-brand"
    //       href="#"
    //       onClick={() => scrollToSection("hero")}
    //       style={{ cursor: "pointer" }}
    //     >
    //       <img src="jmc-logo.png" alt="logo" width="30" height="30" />
    //     </div>
    //     <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbarSupportedContent"
    //       aria-controls="navbarSupportedContent"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    //         <li className="nav-item">
    //           <span
    //             className="nav-link"
    //             onClick={() => scrollToSection("about")}
    //           >
    //             about
    //           </span>
    //         </li>
    //         <li className="nav-item">
    //           <span
    //             className="nav-link"
    //             onClick={() => scrollToSection("projects")}
    //           >
    //             projects
    //           </span>
    //         </li>
    //         <li className="nav-item">
    //           <span
    //             className="nav-link"
    //             onClick={() => scrollToSection("contact")}
    //           >
    //             contact
    //           </span>
    //         </li>
    //         <li className="nav-item">
    //           <a
    //             className="nav-link"
    //             href="../chow_joshua.pdf"
    //             role="button"
    //             target="_blank"
    //           >
    //             resume
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </div>
  );
};

export default NavBar;
