const express = require("express");
const { getAllUser, createUser } = require("../controllers/userController");

//router init
const router = express.Router();

//routes
router.route("/").get(getAllUser).post(createUser);

//export
module.exports = router;
