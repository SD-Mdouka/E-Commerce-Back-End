const { default: slugify } = require("slugify");

const CategoryModel = require("../modules/CategoryModel");
const expressAsyncHandler = require("express-async-handler");
/************Start**Get List**********/
// @description function to get list categories
// @route GET /api/v1/categories
// @access Public

exports.getCategories = expressAsyncHandler(async (req, res) => {
  const page = req.query.page * 1 || 2;
  const limit = req.query.limit * 1 || 5;
  const skip = (page - 1) * limit;
  const categories = await CategoryModel.find({}).skip(skip).limit(limit);
  res.status(200).json({ results: categories.length, page, data: categories });
});

/***********End**Get List************/

/***************Start**Get Single Category*************** */
// @description function to get categorie  by id
// @route GET /api/v1/categories/:id
// @access Public

exports.getCategory = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;
  const category = await CategoryModel.findById(id);
  if (!category) {
    res.status(404).json({ msg: `No category for this id ${id}` });
  }
  res.status(200).json({ data: category });
});

/***************End**Get Single Category*************** */

/***************Start**Create*************** */
// @description function to create categories
// @route POST /api/v1/categories
// @access Private
exports.craeteCategory = expressAsyncHandler(async (req, res) => {
  const name = req.body.name;
  // form async await
  const category = await CategoryModel.create({ name, slug: slugify(name) });
  res.status(201).json({ data: category });
});
/***************End**Create*************** */

/***************Start**Update Category*************** */
// @description function to update categories
// @route PUT /api/v1/categories
// @access Private
exports.updateCategory = expressAsyncHandler(async (req, res) => {
  const { id } = req.parames;
  const { name } = req.body;
  const category = await CategoryModel.findOneAndUpdate(
    { _id: id },
    { name, slug: slugify(name) },
    { new: true }
  );
});
/***************End**Update Category*************** */
