import React, { useState, useContext } from "react";
import { UserContext } from "../../UserContext";

const InputForm = ({ type }) => {
  const { email } = useContext(UserContext);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [posted, setPosted] = useState(false);

  const handleChange = (event, setState) => {
    setState(event.target.value);
  };

  const postInfo = () => {
    const data = {
      title: title,
      date: date,
      location: location,
      description: description,
      admin: email,
    };
    fetch(`/api/${type}`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: new Headers({ "Content-Type": "application/json" }),
    }).then((res) => {
      setPosted(true);
    });
  };

  return (
    <div>
      <p>Input Form</p>
      <label for="title">Title</label>
      <input
        id="title"
        onInput={(event) => {
          handleChange(event, setTitle);
        }}
      />
      <label for="date">Date and Time</label>
      <input
        id="date"
        onInput={(event) => {
          handleChange(event, setDate);
        }}
      />
      <label for="location">Location</label>
      <input
        id="location"
        onInput={(event) => {
          handleChange(event, setLocation);
        }}
      />
      <label for="desc">Description</label>
      <textarea
        id="desc"
        onInput={(event) => {
          handleChange(event, setDescription);
        }}
      />
      {/* <label for="photo">Photo</label>
      <input id="file" type="file" accept="image/*" onInput={handleFile} /> */}
      <button onClick={postInfo}>Submit</button>
      {posted ? <p>Posted!</p> : null}
    </div>
  );
};

export default InputForm;
