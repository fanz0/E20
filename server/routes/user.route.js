const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  logoutUser,
  refreshCookie,
} = require("../controllers/user.controller");

// Register User
router.post("/register", registerUser);

// Login User
router.post("/login", loginUser);

// Logout User
router.post("/logout", logoutUser);

// Refresh Session
router.get("/refresh", refreshCookie);

module.exports = router;
