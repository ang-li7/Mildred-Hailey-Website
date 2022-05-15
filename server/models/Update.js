const mongoose = require("mongoose");

const UpdateSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    photos: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Update", UpdateSchema);
