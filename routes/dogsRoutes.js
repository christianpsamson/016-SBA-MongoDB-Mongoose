const express = require("express");
const router = express.Router();
const app = express();
const methodOverride = require("method-override");
const Dog_weight = require("../models/dogsSchema");

//////////////////////////////////////////////////////////////////////////////////////////////////
// override the html method for forms:
//
router.use(methodOverride("_method"));
//////////////////////////////////////////////////////////////////////////////////////////////////

router.get("/", async (req, res) => {
  const dogs = await Dog_weight.find({});
  res.render("index", { dogs });
});

router.get("/new", (req, res) => {
  res.render("newDoc");
});

router.post("/", async (req, res) => {
  try {
    const newBreed = new Dog_weight(req.body);
    await newBreed.save();
    res.redirect(`/dogs/${newBreed._id}`);
  } catch (error) {
    res.status(400).send(`ERROR: ${error}`);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const dog = await Dog_weight.findById(id);
  res.render("details", { dog });
});

router.get("/:id/edit", async (req, res) => {
  const { id } = req.params;
  const dog = await Dog_weight.findById(id);
  res.render("editDoc", { dog });
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const dog = await Dog_weight.findByIdAndUpdate(id, req.body, {
      runValidators: true,
    });
    res.redirect(`/dogs/${dog._id}`);
  } catch (error) {
    res.status(400).send(`ERROR: ${error}`);
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deleteDoc = await Dog_weight.findByIdAndDelete(id);
  res.redirect("/dogs");
});

module.exports = router;
