const express = require("express");
const dotenv = require("dotenv");

// Relation of variable end application
dotenv.config({ path: "config.env" });
// application express

const app = express();
//Test Middelwer

const morgan = require("morgan");
//Middle test body request
app.use(express.json());
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
  console.log(`Use Mode is : ${process.env.NODE_ENV}`);
}

//Routes

// app.get("/", (req, res) => {
//   res.send("our Api");
// });

app.post("/", (req, res) => {
  const name = req.body.name;
  console.log(req.body);
  const newCategoryModel = new CategoryModel({ name });
  newCategoryModel
    .save()
    .then((doc) => {
      res.json(doc);
    })
    .catch((err) => {
      res.json(err);
    });
}); //{{url}}/api/create?name=pro1&sku=1234556&price=12&quantity=2

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`app api with port ${port}`);
  console.log("====================================");
});
