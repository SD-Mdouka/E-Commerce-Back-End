const express = require("express");
const {
  getCategory,
  craeteCategory,
  getCategories,
  updateCategory,
  deleteCategory,
} = require("../services/CategoryServices");
const { getCategoryValidator } = require("../utils/validators/categoryValidator");

const router = express.Router();

router.route("/").get(getCategories).post(craeteCategory);
router
  .route("/:id")
  .get(getCategoryValidator,
    getCategory)
  .put(updateCategory)
  .delete(deleteCategory);

module.exports = router;
