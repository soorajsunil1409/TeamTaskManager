const mongoose = require("mongoose");
const { Schema } = mongoose;

const TeamMember = new Schema({
  MemberName: { type: String, required: true },
  UserName: { type: String, required: true },
  Password: { type: String, required: true },
  Email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid email address"], // Email validation using regex
  },
  Role: { type: String, enum: ["Team Lead", "Team Member"], required: true },
});

module.exports = mongoose.model("TeamMember", TeamMember);
