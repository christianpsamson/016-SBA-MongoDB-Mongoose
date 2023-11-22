const mongoose = require("mongoose");

const dogSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  maleWtKg: {
    type: String,
    required: true,
  },
  maleWtLb: {
    type: String,
    required: true,
  },
  femaleWtKg: {
    type: String,
    required: true,
  },
  femaleWtLb: {
    type: String,
    required: true,
  },
});

const Dog_weight = mongoose.model("Dog_weight", dogSchema);
module.exports = Dog_weight;
