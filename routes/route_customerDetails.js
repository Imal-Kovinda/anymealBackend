const express = require("express");
const { customerDetails, getCustDetails } = require('../controller/CustomerDetails')

const router = express.Router();

router.route("/").post(customerDetails)
router.route("/").get(getCustDetails)

module.exports = router;