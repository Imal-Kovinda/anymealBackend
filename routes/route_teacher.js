const express = require("express");
const { getAllTeachers, registerAllTeacher } = require("../controller/Teachers")

const router = express.Router();

router.route("/").get(getAllTeachers)
router.route("/").post(registerAllTeacher)

module.exports = router; 