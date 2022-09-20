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
          <Nav.Link href="/locations">
            Locations
          </Nav.Link>
          <Nav.Link href="/map">
            Map
          </Nav.Link>
          <Nav.Link href="/costs">
            Costs
          </Nav.Link>
          <Nav.Link href="/socials">
            Socials
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);
