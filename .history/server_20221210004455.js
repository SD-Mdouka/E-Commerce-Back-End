const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config({ path: "config.env" });
const app = express();
mongoose
  .connect(process.env.DB_URI)
  .then((conn) => {
    console.log("====================================");
    console.log(`connect database and : ${conn.connection.host}`);
    console.log("====================================");
  })
  .catch((error) => {
    console.log("====================================");
    console.error(`connect database and : ${error}`);
    console.log("====================================");
    process.exit(1);
  });
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
