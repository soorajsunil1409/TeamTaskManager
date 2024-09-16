const mongoose = require("mongoose");
const { Schema } = mongoose;

const TaskChatSchema = new Schema(
  {
    Writer: { type: String, required: true },
    msg: { type: String, required: true },
    Time_Date: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("TaskChat", TaskChatSchema);
