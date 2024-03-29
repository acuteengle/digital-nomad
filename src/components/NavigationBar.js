import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

export const NavigationBar = () => (
  <Navbar
    expand="lg"
  >
    <Container>
      <Navbar.Brand href="/">
        <h3>B-Nomadic</h3>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="/map">
            Map
          </Nav.Link>
          <Nav.Link href="/costs">
            Costs
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);
