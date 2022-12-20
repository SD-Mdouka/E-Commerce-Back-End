const express = require("express");
const dotenv = require("dotenv");

dotenv.config({ path: "config.env" });
const app = express();
app.get("/", (req, res) => {
  res.send("our Api");
});

app.listen(8000, () => {
  console.log("app api");
  console.log("====================================");
});
