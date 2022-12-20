const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
// Relation of variable end application
dotenv.config({ path: "config.env" });
// application express

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
//Test Middelwer
const morgan = require("morgan");

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
  console.log(`Use Mode is : ${process.env.NODE_ENV}`);
}
app.get("/", (req, res) => {
  res.send("our Api");
});
//Creation Schema

//1 create initiale schema
const categorySchema = new mongoose.Schema({
  name: String,
});

//2 create modale
const CategoryModal = mongoose.model("Category", categorySchema);

//Routes

app.post("/", (req, res) => {
  const name = req.body.name;
  console.log(name);
  const newCategoryModel = new CategoryModal({ name });
  newCategoryModel
    .save()
    .then((doc) => {
      res.json(doc);
    })
    .catch((err) => {
      res.json(err);
    });
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`app api with port ${port}`);
  console.log("====================================");
});
