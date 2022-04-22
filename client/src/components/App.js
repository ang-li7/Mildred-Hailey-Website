import React from "react";
import "./App.css";
import NavBar from "./modules/NavBar";

import { Router } from "@reach/router";
import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import Updates from "./pages/Updates";
import Login from "./pages/Login";
import Footer from "./modules/Footer";

const App = () => {
  return (
    <>
      <NavBar />
      <Router>
        <Home path="/" />
        <Events path="/events" />
        <Updates path="/updates" />
        <About path="/about" />
        <Login path="/login" />
      </Router>
      <Footer />
    </>
  );
};

export default App;
