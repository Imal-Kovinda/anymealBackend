const express = require("express");
const { addMeals } = require('../controller/AvailableMeals')

const router = express.Router();

router.route("/").post(addMeals)

module.exports = router;