const express = require("express");
const bodyParser = require("body-parser");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const mongoConnectionURL = process.env.MONGO_CONNECTION_URL;
const api = require("./api");
const Admin = require("./models/Admin");
const multer = require("multer");
const upload = multer();

mongoose.connect(mongoConnectionURL, () => {
  console.log("Connected to Mongo");
});

app.use("/api", api);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
