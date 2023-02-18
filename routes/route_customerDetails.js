const express = require("express");
const { customerDetails } = require('../controller/CustomerDetails')

const router = express.Router();

router.route("/").post(customerDetails)

module.exports = router;