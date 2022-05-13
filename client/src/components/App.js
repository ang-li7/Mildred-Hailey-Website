import React from "react";
import "./App.css";
import NavBar from "./modules/NavBar";

import { Router } from "@reach/router";
import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import Updates from "./pages/Updates";
import Footer from "./modules/Footer";
import { AuthStateProvider } from "../FireBase";

const App = () => {
  return (
    <>
      <AuthStateProvider>
        <NavBar />
        <Router>
          <Home path="/" />
          <Events path="/events" />
          <Updates path="/updates" />
          <About path="/about" />
        </Router>
        <Footer />
      </AuthStateProvider>
    </>
  );
};

export default App;
