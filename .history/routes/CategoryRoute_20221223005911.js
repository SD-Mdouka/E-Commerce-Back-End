const express = require("express");
const {
  getCategory,
  craeteCategory,
  getCategories,
  updateCategory,
  deleteCategory,
} = require("../services/CategoryServices");

const router = express.Router();

router.route("/").get(getCategories).post(craeteCategory);
router
  .route("/:id")
  .get(getCategory)
  .put(updateCategory)
  .delete(deleteCategory);

module.exports = router;
