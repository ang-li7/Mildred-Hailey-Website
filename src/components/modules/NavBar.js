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
          {" "}
          About
        </Link>
        <h1 className="NavBar-link">Partner Login</h1>
      </div>
    </div>
  );
};

export default NavBar;
