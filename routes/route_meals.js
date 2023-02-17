const express = require("express");
const { meals } = require('../controller/Meals')

const router = express.Router();

router.route("/").post(meals)

module.exports = router;