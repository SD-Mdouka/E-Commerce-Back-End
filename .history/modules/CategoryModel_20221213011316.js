const mongoose = require("mongoose");

//Creation Schema

//1 create initiale schema
const categorySchema = new mongoose.Schema({
  name: String,
});

//2 create model
const CategoryModel = mongoose.model("Category", categorySchema);

module.exports = CategoryModel;
