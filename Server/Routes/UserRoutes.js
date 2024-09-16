const express = require("express");
const UserModel = require("../Models/Users.js");
const router = express.Router();
router.get("/", async (req, res) => {
  try {
    const user_datum = await UserModel.find({});
    res.status(200).json(user_datum);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});
router.get("/:UserName", async (req, res) => {
  const { UserName } = req.params;
  try {
    const user_data = await UserModel.findOne({ UserName: UserName });
    if (!user_data) {
      return res.status(404).json({ error: "No such user found." });
    } else {
      return res.status(200).json(user_data);
    }
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

router.post("/", async (req, res) => {
  const { UserName, Password, Role, Email, Leader_id } = req.body;
  try {
    const user_data = await UserModel.create({
      UserName,
      Password,
      Role,
      Email,
      Leader_id,
    });
    res.status(200).json(user_data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
