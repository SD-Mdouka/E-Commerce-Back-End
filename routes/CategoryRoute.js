const express = require("express");
const { getCategory, craeteCategory } = require("../services/CategoryServices");

const router = express.Router();

router.route("/").get(getCategory).post(craeteCategory);
router.get("/", getCategory);

module.exports = router;
