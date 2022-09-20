import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

export const NavigationBar = () => (
  <Navbar
    expand="lg"
    sticky="top"
  >
    <Container>
      <Navbar.Brand href="/">
        <h2>B.Nomad</h2>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link className="nav-link">
            About
          </Nav.Link>
          <Nav.Link className="nav-link">
            Skills
          </Nav.Link>
          <Nav.Link className="nav-link">
            Experience
          </Nav.Link>
          <Nav.Link className="nav-link">
            Projects
          </Nav.Link>
          <Nav.Link className="nav-link">
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);
