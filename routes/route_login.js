const express = require("express");
const {login} = require("../controller/Login");

const router = express.Router();

//router.route("/").get(login)
router.route("/").post(login)

module.exports = router;