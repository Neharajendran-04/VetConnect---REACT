
import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { FaPaw, FaChevronDown } from "react-icons/fa";
import "./Header.css";

function Header() {
  return (
    <Navbar expand="lg" className="vet-navbar">
      <Container>
        <Navbar.Brand href="/" className="vet-brand">
          <div className="vet-logo-icon">
            <FaPaw />
          </div>

          <span className="vet-brand-name">
            Vet<span>Connect</span>
          </span>
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="vet-navbar-nav"
          className="vet-toggle"
        />

        <Navbar.Collapse id="vet-navbar-nav">
          <Nav className="mx-auto vet-nav-links">
            <Nav.Link href="/" className="vet-nav-link active">
              Home
            </Nav.Link>

            <Nav.Link href="#doctors" className="vet-nav-link">
              Find Veterinarian
            </Nav.Link>

            <Nav.Link href="#services" className="vet-nav-link">
              Services
            </Nav.Link>

            <Nav.Link href="#about" className="vet-nav-link">
              About
            </Nav.Link>
          </Nav>

          <Nav className="vet-nav-actions">
            <Nav.Link href="/login" className="vet-login">
              Login
            </Nav.Link>

            <Button
              href="/register"
              className="vet-register"
            >
              Get Started
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
