const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const UserRoutes = require("./Routes/UserRoutes.js");
const TaskRoutes = require("./Routes/TaskRoutes.js");
const app = express();
app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/user", UserRoutes);
app.use("/api/tasks", TaskRoutes);
mongoose
  .connect(
    "mongodb+srv://manikandan211205:qwzyyGypb3bcPPUX@cluster0.yto6yer.mongodb.net/tasks_db?retryWrites=true&w=majority&appName=Cluster0/"
  )
  .then(() => {
    app.listen(4000, () => {
      console.log("server is running...");
    });
  })
  .catch((e) => {
    console.group(e);
  });
