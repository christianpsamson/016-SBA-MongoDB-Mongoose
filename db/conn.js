//////////////////////////////////////////////////////////////////////////////////////////////////
// database connection module
//////////////////////////////////////////////////////////////////////////////////////////////////

const mongoose = require("mongoose");
const URL = process.env.MONGO_URL;

const connectDb = async () => {
  try {
    await mongoose.connect(URL);
    console.log("Connected to mongoDB");
  } catch (error) {
    console.log("Error in connecting to mongoDB", error);
  }
};

module.exports = connectDb;
