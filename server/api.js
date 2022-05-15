const express = require("express");
const router = express.Router();
const Admin = require("./models/Admin");
const Event = require("./models/Event");
const Update = require("./models/Update");

router.get("/updates", (req, res) => {
  Update.find()
    .then((updates) => {
      res.send(updates.reverse());
    })
    .catch((err) => console.log(err));
});

router.get("/events", (req, res) => {
  Event.find()
    .then((events) => {
      res.send(events.reverse());
    })
    .catch((err) => console.log(err));
});

router.get("/admins", (req, res) => {
  Admin.find().then((admins) => {
    res.send(admins.map((admin) => admin.email));
  });
});

router.post("/events", (req, res) => {
  Event.create({
    title: req.body.title,
    date: req.body.date,
    location: req.body.location,
    description: req.body.description,
    email: req.body.admin,
  })
    .then((event) => {
      res.send(event);
    })
    .catch((err) => console.log(err));
});

router.post("/updates", (req, res) => {
  Update.create({
    title: req.body.title,
    description: req.body.description,
    email: req.body.admin,
  })
    .then((update) => {
      res.send(update);
    })
    .catch((err) => console.log(err));
});

router.post("/admin", (req, res) => {
  Admin.exists({ email: req.body.new_admin }) // first check if new admin is already an admin
    .then((bool) => {
      if (bool) {
        res.send(`${req.body.new_admin} already is an admin`);
      } else {
        Admin.create({ email: req.body.new_admin }) // add as admin if doesnt exist
          .then((comment) => {
            res.send(`Added ${req.body.new_admin} as admin`);
          })
          .catch((err) => console.log(error));
      }
    });
});

router.all("*", (req, res) => {
  console.log(`API route not found: ${req.method} ${req.url}`);
  res.status(404).send({ msg: "API route not found" });
});

module.exports = router;
