const express = require("express");
const { addToCart } = require('../controller/Cart')

const router = express.Router();

router.route("/").post(addToCart)


module.exports = router;