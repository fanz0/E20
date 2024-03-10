const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  logoutUser,
} = require("../controllers/user.controller");

// Register User
router.post("/register", registerUser);

// Login User
router.post("/login", loginUser);

// Logout User
router.post("/logout", logoutUser);

module.exports = router;
