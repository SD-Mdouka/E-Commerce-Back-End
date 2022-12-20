const express = require("express");
const dotenv = require("dotenv");

dotenv.config({ path: "config.env" });
const app = express();
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
