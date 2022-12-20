const express = require("express");

const app = express();
app.get("/", (req, res) => {
  res.send("our Api");
});

app.listen(8000, () => {
  console.log("====================================");
  console.log("app api");
  console.log("====================================");
});
