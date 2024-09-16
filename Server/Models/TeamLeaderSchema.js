const mongoose = require("mongoose");
const { Schema } = mongoose;

const TeamLeader = new Schema({
  TeamName: { type: String, required: true },
  UserName: { type: String, required: true },
  Password: { type: String, required: true },
  Email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid email address"], // Email validation using regex
  },
  Role: { type: String, enum: ["Team Lead", "Team Member"], required: true },
  TeamMembers: [{ type: Schema.Types.ObjectId, ref: "TeamMember" }],
});

module.exports = mongoose.model("TeamLeader", TeamLeader);
