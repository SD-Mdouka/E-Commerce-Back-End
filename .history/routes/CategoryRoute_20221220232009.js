const express = require("express");
const {
  getCategory,
  craeteCategory,
  getCategories,
} = require("../services/CategoryServices");

const router = express.Router();

router.route("/").get(getCategories).post(craeteCategory);
router.route("/:id").get(getCategory);

module.exports = router;
