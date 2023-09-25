import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';

export default function AppNavbar() {
  return (
    <Navbar expand="lg" className="bg-danger">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="navbar" to="/"> 🏡 Home</Link>
            <Link className="navbar" to="/contacto"> 📒 Contacto</Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand>
          <Link className="navbar" to="/"> Happy Cake  🍰 </Link>  
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};


