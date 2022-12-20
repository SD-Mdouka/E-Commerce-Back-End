// Import Fille and function
const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const app = express();
const dbConnection = require("./config/database");
const CategoryRoutes = require("./routes/CategoryRoute");

// Configiration of variable
dotenv.config({ path: "config.env" });
// application express with connect db
dbConnection();

//Middle test body request
app.use(express.json());
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
  console.log(`Use Mode is : ${process.env.NODE_ENV}`);
}

//Mount Routes
app.use("/api/V1/categories", CategoryRoutes);
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`app api with port ${port}`);
  console.log("====================================");
});
