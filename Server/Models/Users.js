const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Users = new Schema(
  {
    UserName: { type: String, required: true, unique: true },
    Password: { type: String, required: true },
    Email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, "Please enter a valid email address"], // Email validation using regex
    },
    Role: { type: String, enum: ["Team Lead", "Team Member"], required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Users", Users);
