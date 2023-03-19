const express = require("express");
const {login} = require("../controller/Login");

const router = express.Router();

router.route("/").get(login)

module.exports = router;