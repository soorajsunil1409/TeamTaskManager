const mongoose = require("mongoose");
const { Schema } = mongoose;

const taskSchema = new Schema(
  {
    title: { type: String, required: true },
    Leader_id: { type: String, required: true },
    Member_id: { type: String },
    description: { type: String, required: true },
    priority: { type: String, enum: ["Low", "Medium", "High"], required: true },
    dueDate: { type: Date, required: true },
    status: {
      type: String,
      enum: ["To Do", "In Progress", "Completed"],
      default: "To Do",
    },
    assign: { type: Schema.Types.ObjectId, ref: "User" },
    comments: [
      {
        commentText: { type: String, required: true },
        commenter: { type: Schema.Types.ObjectId, ref: "User" },
        createdAt: { type: Date, default: Date.now },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Tasks", taskSchema);
