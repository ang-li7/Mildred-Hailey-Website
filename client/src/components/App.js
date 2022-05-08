import React, { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./modules/NavBar";

import { Router } from "@reach/router";
import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import Updates from "./pages/Updates";
import Login from "./pages/Login";
import Footer from "./modules/Footer";
import { signInWithGoogle, AuthStateProvider } from "../FireBase";
import { UserContext } from "../UserContext.js";

const App = () => {
  // const [email, setEmail] = useState("");
  // const [verified, setVerified] = useState(false);

  // const handleLogin = () => {
  //   signInWithGoogle().then((result) => {
  //     setEmail(result.user.email);
  //     setVerified(result.user.emailVerified);
  //   });
  // };

  return (
    <>
      <AuthStateProvider>
        {/* <NavBar email={email} verified={verified} googleLogin={handleLogin} /> */}
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
