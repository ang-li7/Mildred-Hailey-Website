import React, { useContext } from "react";
import "./NavBar.css";
import { Link } from "@reach/router";
import { UserContext } from "../../UserContext";

const NavBar = () => {
  const { email, verified, handleLogin } = useContext(UserContext);
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
        {verified ? (
          <p>Logged in</p>
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
