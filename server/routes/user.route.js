const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  logoutUser,
  refreshUser,
} = require("../controllers/user.controller");

// Register User
router.post("/register", registerUser);

// Login User
router.post("/login", loginUser);

// Refresh User
router.post("/refresh", refreshUser);

// Logout User
router.post("/logout", logoutUser);

module.exports = router;
