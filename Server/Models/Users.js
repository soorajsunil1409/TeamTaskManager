const mongoose = require("mongoose");
const { Schema } = mongoose;

const Users = new Schema(
  {
    UserName: { type: String, required: true },
    Password: { type: String, required: true },
    Role: { type: String, enum: ["Team Lead", "Team Member"], required: true },
  },
  { timestamps: true }
);

module.exports = Users;
