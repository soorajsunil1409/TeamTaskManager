const mongoose = require("mongoose");
const { Schema } = mongoose;

const taskSchema = new Schema(
  {
    title: { type: String, required: true },
    Leader_id: { type: String, required: true, default: "1234567890" },
    Member_id: { type: String },
    description: { type: String, required: true },
    priority: { type: String, enum: ["Low", "Medium", "High"], required: true },
    dueDate: { type: String, required: true },
    status: {
      type: String,
      enum: ["To Do", "In Progress", "Completed"],
      default: "To Do",
    },
    TaskChat: [],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Tasks", taskSchema);
