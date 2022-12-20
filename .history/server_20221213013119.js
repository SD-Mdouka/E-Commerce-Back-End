const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");

// Relation of variable end application
dotenv.config({ path: "config.env" });
// application express

const app = express();
//Test Middelwer

//Middle test body request
app.use(express.json());
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
  console.log(`Use Mode is : ${process.env.NODE_ENV}`);
}

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`app api with port ${port}`);
  console.log("====================================");
});
