import React from "react";
import "./App.css";
import NavBar from "./modules/NavBar";
import Preview from "./modules/Preview";

const App = () => {
  return (
    <>
      <NavBar />
      <div className="App-previewContainer">
        <Preview type="Events" />
        <Preview type="Updates" />
      </div>
    </>
  );
};

export default App;
