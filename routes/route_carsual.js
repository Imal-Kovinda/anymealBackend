const express = require("express");
const { getToCard } = require("../controller/Carsual");

const router = express.Router();

router.route("/").get(getToCard)

module.exports = router;