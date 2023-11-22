const express = require("express");
const app = express();
const dotenv = require("dotenv");
const path = require("path");
const mongoose = require("mongoose");

const Dog_weight = require("./models/dogsSchema");

dotenv.config();

const PORT = process.env.PORT;
const URL = process.env.MONGO_URL;

mongoose
  .connect(URL)
  .then(() => {
    console.log("Connected to mongoDB");
  })
  .catch((err) => {
    console.log("Error in connecting to mongoDB");
    console.log(err);
  });

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/dogs", async (req, res) => {
  const dogs = await Dog_weight.find({});
  res.send("Dogs");
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
