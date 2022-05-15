const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema(
  {
    title: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Event", EventSchema);
