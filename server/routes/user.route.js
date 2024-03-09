const express = require("express");
const router = express.Router();
const passport = require("passport");
const { registerUser, logoutUser } = require("../controllers/user.controller");

// Register User
router.post("/register", registerUser);

// Login User
router.post("/login", async (req, res, next) => {
  await passport.authenticate("local", (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(401).json({ message: info.message });
    }
    req.logIn(user, (err) => {
      if (err) {
        return next(err);
      }
      req.session.isAuth = true;
      res.status(200).json({ message: "Login Effettuato con successo" });
    });
  })(req, res, next);
});

// Logout User
router.post("/logout", logoutUser);

module.exports = router;
