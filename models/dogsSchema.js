//////////////////////////////////////////////////////////////////////////////////////////////////
// schema
// validations: required, unique, trim and match
//////////////////////////////////////////////////////////////////////////////////////////////////
const mongoose = require("mongoose");

const dogSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  maleWtKg: {
    type: String,
    required: true,
    match: /\d.*-\d.*/,
  },
  maleWtLb: {
    type: String,
    required: true,
    match: /\d.*-\d.*/,
  },
  femaleWtKg: {
    type: String,
    required: true,
    match: /\d.*-\d.*/,
  },
  femaleWtLb: {
    type: String,
    required: true,
    match: /\d.*-\d.*/,
  },
});

const Dog_weight = mongoose.model("Dog_weight", dogSchema);

module.exports = Dog_weight;
