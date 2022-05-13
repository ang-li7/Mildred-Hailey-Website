import React from "react";
import "./Preview.css";

const Preview = ({ type }) => {
  return (
    <div className="Preview-container">
      <h1>{type}</h1>
    </div>
  );
};

export default Preview;
