const express = require("express");
const bodyParser = require("body-parser");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const mongoConnectionURL = process.env.MONGO_CONNECTION_URL;
const api = require("./api");
const Admin = require("./models/Admin");

mongoose.connect(mongoConnectionURL, () => {
  console.log("Connected to Mongo");
});

// Allows post requests to be read
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Makes sure that POST request is made by an admin
app.use((req, res, next) => {
  if (req.method === "POST") {
    Admin.exists({ email: req.body.admin }).then((bool) => {
      if (bool) {
        next();
      } else {
        res.status(401).send("Unauthorized request");
      }
    });
  } else {
    next();
  }
});

app.use("/api", api);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
