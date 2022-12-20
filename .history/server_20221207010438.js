const express = require("express");
const dotenv = require("dotenv");

dotenv.config({ path: "config.env" });
const app = express();
app.get("/", (req, res) => {
  res.send("our Api");
});

const port = process.env.PORT;
app.listen(8000, () => {
  console.log(`app api with port ${port}`);
  console.log("====================================");
});
