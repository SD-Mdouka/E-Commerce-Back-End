const { default: slugify } = require("slugify");

const CategoryModel = require("../modules/CategoryModel");
const expressAsyncHandler = require("express-async-handler");
const ApiError = require("../utils/apiError");

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

exports.getCategory = expressAsyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const category = await CategoryModel.findById(id);
  if (!category) {
    return next(new ApiError(`No category for this id ${id}`), 404);
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
exports.updateCategory = expressAsyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const { name } = req.body;
  const category = await CategoryModel.findOneAndUpdate(
    { _id: id },
    { name, slug: slugify(name) },
    { new: true }
  );
  if (!category) {
    return next(new ApiError(`No category for this id ${id}`), 404);
  }
  res.status(201).json({ data: category });
});
/***************End**Update Category*************** */
/***************Start**Delete Category*************** */
// @description function specific to Delete categories
// @route DELETE /api/v1/categories
// @access Private
exports.deleteCategory = expressAsyncHandler(async (res, req, next) => {
  const { id } = req.params;
  const category = await CategoryModel.findByIdAndDelete(id);

  if (!category) {
    return next(new ApiError(`No category for this id ${id}`), 404);
  }
  res.status(204).send();
});

/***************End**Delete Category*************** */
