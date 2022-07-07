import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


const Header = () => {
  return (
    <Navbar bg="primary" expand="lg">
      <Container>
        <Navbar.Brand style={{color: "white"}} as={Link} to="/"  href="#home">Programming-Instructor</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/home" style={{color: "white"}} href="#home">Home</Nav.Link>
            <Nav.Link as={Link} to="/services" style={{color: "white"}} href="#link">Services</Nav.Link>
            <Nav.Link as={Link} to="/blogs" style={{color: "white"}} href="#link">Blogs</Nav.Link>
            <Nav.Link as={Link} to="/about" style={{color: "white"}} href="#link">About</Nav.Link>
            <Nav.Link as={Link} to="/login" style={{color: "white"}} href="#link">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
