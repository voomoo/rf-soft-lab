import React from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import logo from "../assets/images/logo.png";

const Appbar = () => {
  return (
    <div>
      <Navbar
        fixed="top"
        expand="lg"
        className="app-bar"
        style={{ background: "white" }}
      >
        <Container fluid>
          <Navbar.Brand href="#home">
            <img src={logo} alt="Company Brand" width="140px" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="#home" className="mx-3">
                Home
              </Nav.Link>
              <Nav.Link href="#link" className="mx-3">
                Our Services
              </Nav.Link>
              <Nav.Link href="#link" className="mx-3">
                Products
              </Nav.Link>
            </Nav>
            <Button>Contact</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Appbar;
