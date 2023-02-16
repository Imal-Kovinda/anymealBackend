const express = require("express");
const { getAllStudents } = require("../controller/Student")
const { regAllStudents } = require("../controller/Student")

const router = express.Router();

router.route("/")
    .get(getAllStudents)
    .post(regAllStudents)

module.exports = router; 