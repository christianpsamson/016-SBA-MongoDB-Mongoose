//////////////////////////////////////////////////////////////////////////////////////////////////
// main script
//////////////////////////////////////////////////////////////////////////////////////////////////
const express = require("express");
const app = express();
const path = require("path");
const dotenv = require("dotenv");

dotenv.config();

const PORT = process.env.PORT;
const connectDb = require("./db/conn");
const router = require("./routes/dogsRoutes");

connectDb();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use("/dogs", router);

app.get("/", (req, res) => {
  res.render("landing");
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
