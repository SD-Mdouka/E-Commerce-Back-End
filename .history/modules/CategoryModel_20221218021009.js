const mongoose = require("mongoose");

//Creation Schema

//1 create initiale schema
const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "Category Name is required"],
      unique: [true, "Category must be unique"],
      minlenght: [3, "Too short category name"],
      maxlenght: [32, "Too long category name"],
    },
    slug: {
      type: String,
      lowercase: true,
    },
  },
  { timestamps: true }
);

//2 create model
const CategoryModel = mongoose.model("Category", categorySchema);

module.exports = CategoryModel;
