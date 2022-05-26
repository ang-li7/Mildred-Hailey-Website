const mongoose = require("mongoose");

const UpdateSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    email: String,
    photoUrl: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Update", UpdateSchema);
