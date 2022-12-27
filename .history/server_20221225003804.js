// Import Fille and function
const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const app = express();
const dbConnection = require("./config/database");
const CategoryRoutes = require("./routes/CategoryRoute");
const ApiError = require("./utils/apiError");

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

app.all("*", (req, res, next) => {
  //Create error and send it to error handling middlewire
  // const err = new Error(`Cant' Find this route : ${req.originalUrl}`);
  next(new ApiError(`Cant' Find this route : ${req.originalUrl}`, 400));
});

//Globale Error handling middlewere
app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  error.status(err.statusCode).json({
    status: err.status,
    error: err,
    mmessage: err.mmessage,
    status: err.status,
  });
  // res.status(400).json({ err });
});

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`app api with port ${port}`);
  console.log("====================================");
});
