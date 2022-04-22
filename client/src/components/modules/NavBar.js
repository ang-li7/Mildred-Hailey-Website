import React from "react";
import "./NavBar.css";
import { Link } from "@reach/router";

const NavBar = () => {
  return (
    <div className="NavBar-container">
      <div className="NavBar-linkContainer">
        <Link to="/" className="NavBar-link">
          Mildred Hailey
        </Link>
        <Link to="/events" className="NavBar-link">
          Events
        </Link>
        <Link to="/updates" className="NavBar-link">
          Updates
        </Link>
        <Link to="/about" className="NavBar-link">
          About
        </Link>
        <Link to="/login" className="NavBar-link">
          Login
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
