const mongoose = require("mongoose");
const { Schema } = mongoose;

const TeamSchema = new Schema({
  Teams: [
    {
      type: Schema.Types.ObjectId,
      ref: "TeamLeader",
    },
  ],
});
module.exports = mongoose.model("Teams", TeamSchema);
