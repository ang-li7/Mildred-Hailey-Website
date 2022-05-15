import React, { useContext } from "react";
import "./NavBar.css";
import { Link } from "@reach/router";
import { UserContext } from "../../UserContext";
import logo from "../../logo.png";

const NavBar = () => {
  const { email, verified, handleLogin, handleLogout } =
    useContext(UserContext);
  return (
    <div className="NavBar-container">
      <div className="NavBar-linkContainer">
        <img src={logo} alt="logo" className="NavBar-logo"></img>
        <Link to="/" className="NavBar-link">
          Mildred C. Hailey Organization
        </Link>
        <Link to="/about" className="NavBar-link">
          About
        </Link>
        <Link to="/updates" className="NavBar-link">
          Updates
        </Link>
        <Link to="/events" className="NavBar-link">
          Events
        </Link>
        <Link to="/contact" className="NavBar-link">
          Contact Us
        </Link>
        {verified ? (
          <Link to="/admin" className="NavBar-link">
            Admin Page
          </Link>
        ) : null}
        {verified ? (
          <button onClick={handleLogout} className="NavBar-link">
            Logout
          </button>
        ) : (
          <button onClick={handleLogin} className="NavBar-link">
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default NavBar;
