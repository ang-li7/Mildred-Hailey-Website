import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../../UserContext";
import "./Preview.css";
import InputForm from "./InputForm";

const Preview = ({ type }) => {
  const { email, verified } = useContext(UserContext);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`/api/${type}`).then((res) => {
      res.json().then((res) => {
        setItems(res);
      });
    });
  }, []);

  return (
    <div className="Preview-container">
      <h1>{type}</h1>
      {email && verified ? <InputForm type={type} /> : null}
      {items.map((item) => {
        return (
          <div key={item._id}>
            <h1>{item.title}</h1>
            {item.date ? <p>{item.date}</p> : null}
            {item.location ? <p>{item.location}</p> : null}
            <p>{item.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Preview;
