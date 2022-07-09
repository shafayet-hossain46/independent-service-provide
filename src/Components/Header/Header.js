import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase/Firebase.init";
import { signOut } from 'firebase/auth';



const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate()

  // Sign Out
  const logOut = () => {
    signOut(auth)
    navigate('/home')
  }
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

            {
              user? <> <Nav.Link onClick={logOut} className="fw-bold"  style={{color: "white"}} href="#link">Log Out</Nav.Link>
              <Nav.Link style={{color: "white"}} href="#link">as: {user?.displayName}</Nav.Link>
              </> : 
              <Nav.Link as={Link} to="/login" style={{color: "white"}} href="#link">Login</Nav.Link>
            } 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
