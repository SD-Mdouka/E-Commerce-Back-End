const express = require("express");
const { getCategory } = require("../services/CategoryServices");

const router = express.Router();

router.get("/", getCategory);

module.exports = router;
