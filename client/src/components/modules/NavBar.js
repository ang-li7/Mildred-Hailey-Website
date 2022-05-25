import React, { useContext } from "react";
import "./NavBar.css";
import { Link } from "@reach/router";
import { UserContext } from "../../UserContext";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import logo from "../../logo.png";

const NavBar = () => {
  const { email, verified, handleLogin, handleLogout } =
    useContext(UserContext);
  return (
    <Navbar className="fs-5 NavBar-container " bg="light" sticky="top">
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} className="NavBar-logo" alt="logo" />
        </Navbar.Brand>

        <Nav className="me-auto">
          <Nav.Link className="px-1" href="/">
            Mildred C. Hailey Organization
          </Nav.Link>

          <Nav.Link className="px-5" href="/about">
            About
          </Nav.Link>
          <Nav.Link className="px-5" href="/updates">
            Updates
          </Nav.Link>
          <Nav.Link className="px-5" href="/events">
            Events
          </Nav.Link>

          {verified ? (
            <Nav.Link className="px-5" href="/admin">
              Admin Page
            </Nav.Link>
          ) : null}
        </Nav>

        {verified ? (
          <Button variant="outline-secondary" onClick={handleLogout}>
            Logout
          </Button>
        ) : (
          <Button variant="outline-secondary" onClick={handleLogin}>
            Admin Login
          </Button>
        )}
      </Container>
    </Navbar>
  );
};

export default NavBar;
