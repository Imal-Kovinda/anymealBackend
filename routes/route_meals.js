const express = require("express");
const { meals, viewMeals, removeMeal, updateMeal } = require('../controller/Meals')

const router = express.Router();

router.route("/").post(meals)
router.route("/").get(viewMeals)
router.route("/").put(removeMeal)
router.route("/update").put(updateMeal)

module.exports = router;