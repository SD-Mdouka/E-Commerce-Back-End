const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config({ path: "config.env" });
const app = express();
mongoose.connect(
  `mongodb+srv://test_user:${process.env.DB_PASSWORD}@cluster0.2skcswv.mongodb.net/?retryWrites=true&w=majority`
);
const morgan = require("morgan");

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
  console.log(`Use Mode is : ${process.env.NODE_ENV}`);
}
app.get("/", (req, res) => {
  res.send("our Api");
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`app api with port ${port}`);
  console.log("====================================");
});
