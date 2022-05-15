const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, lowercase: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Admin", AdminSchema);
