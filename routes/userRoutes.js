const express = require("express");
const router = express.Router();

const { loginUser, createUser } = require("../controllers/userController");

router.post("/signin", loginUser);
router.post("/signup", createUser);

module.exports = router;
