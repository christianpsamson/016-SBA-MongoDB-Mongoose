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
app.use(express.urlencoded({ extended: true }));

app.get("/dogs", async (req, res) => {
  const dogs = await Dog_weight.find({});
  res.render("index", { dogs });
});

app.get("/dogs/new", (req, res) => {
  res.render("newDoc");
});

app.post("/dogs", async (req, res) => {
  const newBreed = new Dog_weight(req.body);
  await newBreed.save();
  res.redirect(`/dogs/${newBreed._id}`);
});

app.get("/dogs/:id", async (req, res) => {
  const { id } = req.params;
  const dog = await Dog_weight.findById(id);
  console.log(dog);
  res.render("details", { dog });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
