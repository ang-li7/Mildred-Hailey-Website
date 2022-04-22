import React from "react";
import Preview from "../modules/Preview";
const Home = () => {
  return (
    <div className="App-previewContainer">
      <Preview type="Events" />
      <Preview type="Updates" />
    </div>
  );
};

export default Home;
