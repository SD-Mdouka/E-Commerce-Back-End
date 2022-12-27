// Import Fille and function
const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const app = express();
const dbConnection = require("./config/database");
const CategoryRoutes = require("./routes/CategoryRoute");
const ApiError = require("./utils/apiError");
const globalError = require("./middelweare/ErrorMiddelWeare");

// Configiration of variable
dotenv.config({ path: "config.env" });
// application express with connect db
dbConnection();

//Middle test body request
app.use(express.json());
if (process.env.MODE_ENV === "development") {
  app.use(morgan("dev"));
  console.log(`Use Mode is : ${process.env.MODE_ENV}`);
}

//Mount Routes
app.use("/api/V1/categories", CategoryRoutes);

app.all("*", (req, res, next) => {
  //Create error and send it to error handling middlewire
  // const err = new Error(`Cant' Find this route : ${req.originalUrl}`);
  next(new ApiError(`Cant' Find this route : ${req.originalUrl}`, 400));
});

//Globale Error handling middlewere
app.use(globalError);

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`app api with port ${port}`);
  console.log("====================================");
});

//Catch error in event data base

process.on("unhandledRejection", (err) => {
  console.log("====================================");
  console.error(
    `Error of unhandledRejection in connection to handler Error => ${err.name} | ${err.message}`
  );
  console.log("====================================");
});
