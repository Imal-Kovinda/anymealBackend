const express = require("express");
const { meals, viewMeals, removeMeal } = require('../controller/Meals')

const router = express.Router();

router.route("/").post(meals)
router.route("/").get(viewMeals)
router.route("/").delete(removeMeal)

module.exports = router;