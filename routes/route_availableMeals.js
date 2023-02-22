const express = require("express");
const { availableMeals } = require('../controller/AvailableMeals')

const router = express.Router();

router.route("/").post(availableMeals)

module.exports = router;