const express = require("express");
require("dotenv").config();
const multer = require("multer");
const router = express.Router();
const Admin = require("./models/Admin");
const Event = require("./models/Event");
const Update = require("./models/Update");
const { Storage } = require("@google-cloud/storage");
const { v4: uuidv4 } = require("uuid"); // allows us to generate random id for cloud storage

const upload = multer(); // use multer to parse multipart/form-data POST requests

// initialize Google Cloud Storage bucket
const storage = new Storage({
  projectId: process.env.GCS_PROJECT_ID,
  credentials: {
    client_email: process.env.GCS_CLIENT_EMAIL,
    private_key: process.env.GCS_PRIVATE_KEY,
  },
});
const bucket = storage.bucket(process.env.GCS_BUCKET_NAME);

router.get("/events", (req, res) => {
  Event.find()
    .then((events) => {
      res.send(events.reverse());
    })
    .catch((err) => console.log(err));
});

router.get("/updates", (req, res) => {
  Update.find()
    .then((updates) => {
      res.send(updates.reverse());
    })
    .catch((err) => console.log(err));
});

router.get("/admins", (req, res) => {
  Admin.find().then((admins) => {
    res.send(admins.map((admin) => admin.email));
  });
});

router.post("/events", upload.single("photo"), (req, res) => {
  Admin.exists({ email: req.body.admin }) //verify admin is making request
    .then((bool) => {
      if (bool) {
        const data = {
          title: req.body.title,
          date: req.body.date,
          location: req.body.location,
          description: req.body.description,
          email: req.body.admin,
          photoUrl: "",
        };
        if (req.file) {
          // if a file is included uploaded to google cloud
          const blob = bucket.file(`${uuidv4()}-${req.file.originalname}`);
          const blobStream = blob.createWriteStream();
          blobStream.on("error", (err) => {
            console.log(err);
          });
          blobStream.on("finish", () => {
            data[
              photoUrl
            ] = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;
            Event.create(data).then((event) => {
              res.send(event);
            });
          });
          blobStream.end(req.file.buffer);
        } else {
          Event.create(data).then((event) => {
            res.send(event);
          });
        }
      } else {
        res.status(401).send("Unauthorized request");
      }
    })
    .catch((err) => console.log(err));
});

router.post("/updates", upload.single("photo"), (req, res) => {
  Admin.exists({ email: req.body.admin }) //verify admin is making request
    .then((bool) => {
      if (bool) {
        const data = {
          title: req.body.title,
          description: req.body.description,
          email: req.body.admin,
          photoUrl: "",
        };
        if (req.file) {
          const blob = bucket.file(`${uuidv4()}-${req.file.originalname}`);
          const blobStream = blob.createWriteStream();
          blobStream.on("error", (err) => {
            console.log(err);
          });
          blobStream.on("finish", () => {
            data[
              photoUrl
            ] = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;
            Update.create(data).then((update) => {
              res.send(update);
            });
          });
          blobStream.end(req.file.buffer);
        } else {
          Update.create(data).then((update) => {
            res.send(update);
          });
        }
      } else {
        res.status(401).send("Unauthorized request");
      }
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
