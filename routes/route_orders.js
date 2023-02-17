const express = require("express");
const { orders } = require('../controller/Orders')

const router = express.Router();

router.route("/").post(orders)

module.exports = router;