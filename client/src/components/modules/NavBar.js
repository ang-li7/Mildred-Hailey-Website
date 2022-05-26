import React, { useContext } from "react";
import "./NavBar.css";
import { Link } from "@reach/router";
import { UserContext } from "../../UserContext";
import { Navbar, Nav, Button, Container, Offcanvas } from "react-bootstrap";
import logo from "../../logo.png";

const NavBar = () => {
  const { email, verified, handleLogin, handleLogout } =
    useContext(UserContext);
  return (
    <Navbar className="fs-5 " bg="light" sticky="top" expand="xl">
      <Container className="NavBar-container">
        <Navbar.Brand href="/">
          <img src={logo} className="NavBar-logo" alt="logo" />
        </Navbar.Brand>

        <Nav className="me-auto">
          <Link className="NavBar-link" to="/">
            Mildred C. Hailey Tenant Organization
          </Link>
          <Link className="NavBar-link" to="/about">
            About
          </Link>
          <Link className="NavBar-link" to="/updates">
            Updates
          </Link>
          <Link className="NavBar-link" to="/events">
            Events
          </Link>
          <Link className="NavBar-link" to="/contact">
            Contact Us
          </Link>

          {verified ? (
            <Link className="NavBar-link" to="/admin">
              Admin Page
            </Link>
          ) : null}
        </Nav>

        {verified ? (
          <Button
            className="NavBar-link"
            variant="outline-secondary"
            onClick={handleLogout}
          >
            Logout
          </Button>
        ) : (
          <Button
            className="NavBar-link"
            variant="outline-secondary"
            onClick={handleLogin}
          >
            Admin Login
          </Button>
        )}
      </Container>
    </Navbar>
  );
};

export default NavBar;
