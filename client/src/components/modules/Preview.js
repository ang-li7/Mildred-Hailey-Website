import React, { useContext } from "react";
import { UserContext } from "../../UserContext";
import "./Preview.css";

const Preview = ({ type }) => {
  const { email, verified } = useContext(UserContext);
  return (
    <div className="Preview-container">
      <h1>{type}</h1>
    </div>
  );
};

export default Preview;
