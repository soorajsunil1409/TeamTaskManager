const express = require("express");
const TaskModel = require("../Models/TasksSchema");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const Task_datum = await TaskModel.find({});
    res.status(200).json(Task_datum);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

router.get("/:_id", async (req, res) => {
  const { Task_id } = req.params;
  try {
    const Task_data = await TaskModel.findOne({ _id: Task_id });
    if (!Task_data) {
      return res.status(404).json({ error: "No such Task found." });
    } else {
      return res.status(200).json(Task_data);
    }
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

router.post("/", async (req, res) => {
  const {
    title,
    Leader_id,
    Member_id,
    description,
    priority,
    dueDate,
    status,
    TaskChat,
  } = req.body;
  try {
    const Task_data = await TaskModel.create({
      title,
      Leader_id,
      Member_id,
      description,
      priority,
      dueDate,
      status,
      TaskChat,
    });
    res.status(200).json(Task_data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
router.put("/:_id", async (req, res) => {
  const { _id } = req.params;
  try {
    const Task_data = await TaskModel.findOneAndUpdate(
      { _id: _id },
      {
        ...req.body,
      }
    );
    if (!Task_data) {
      return res.status(404).json({ error: "No such Task found." });
    } else {
      return res.status(200).json(Task_data);
    }
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

router.delete("/:id", async (req, res) => {
  const taskId = req.params.id; // Get the document ID from the request URL

  try {
    // Use findByIdAndDelete to remove the document
    const deletedTask = await TaskModel.findByIdAndDelete(taskId);

    // Check if the task was found and deleted
    if (!deletedTask) {
      return res.status(404).json({ error: "Task not found" });
    }

    // Success: document was deleted
    res.json({ message: "Task deleted successfully", deletedTask });
  } catch (err) {
    // Handle errors
    res
      .status(500)
      .json({ error: "An error occurred while deleting the task" });
  }
});

module.exports = router;
