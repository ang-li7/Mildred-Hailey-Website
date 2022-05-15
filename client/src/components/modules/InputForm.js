import React, { useState } from "react";

const InputForm = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState("");

  const handleChange = (event, setState) => {
    setState(event.target.value);
    console.log(photo);
  };

  //   const handleFile = (event) => {
  //     console.log(document.getElementById("file").files);
  //   };

  const postInfo = () => {};

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
    </div>
  );
};

export default InputForm;
