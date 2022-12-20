const { default: slugify } = require("slugify");

const CategoryModel = require("../modules/CategoryModel");
const expressAsyncHandler = require("express-async-handler");

// @description function to get list categories
// @route GET /api/v1/categories
// @access Public

exports.getCategory = expressAsyncHandler(async (req, res) => {
  const page = 2;
  const limit = 15;
  const skip = (page - 1) * limit;
  const categories = await CategoryModel.find({}).skip(skip).limit(limit);
  res.status(200).json({ results: categories.length, page, data: categories });
});

// @description function to create categories
// @route POST /api/v1/categories
// @access Private
exports.craeteCategory = expressAsyncHandler(async (req, res) => {
  const name = req.body.name;
  // form async await
  const category = await CategoryModel.create({ name, slug: slugify(name) });
  res.status(201).json({ data: category });
  // CategoryModel.create({ name, slug: slugify(name) })
  //   .then((category) => {
  //     res.status(201).json({ data: category });
  //   })
  //   .catch((err) => {
  //     res.status(400).send(err);
  //   });
});
