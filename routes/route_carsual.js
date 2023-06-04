const express = require("express");
const { getToCard, viewCardDetails } = require("../controller/Carsual");

const router = express.Router();

router.route("/").get(getToCard)
router.route("/").post(viewCardDetails)

module.exports = router;