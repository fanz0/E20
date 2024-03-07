const express = require("express");
const session = require("express-session");
const crypto = require("crypto");
const app = express();
const mongoose = require("mongoose");
const eventRoute = require("./routes/event.route");
const cors = require("cors");
const User = require("./models/user.model");
const userRoute = require("./routes/user.route");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
require("dotenv").config();

// Session Configure
app.use(
  session({
    secret: crypto.randomBytes(64).toString("hex"),
    resave: false,
    saveUninitialized: true,
  })
);
// Passport Configure
app.use(passport.initialize());
app.use(passport.session());

// Configure Local Strategy
passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const user = await User.findOne({ username });
      if (!user) {
        return done(null, false, {
          message: "Username errato",
        });
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return done(null, false, { message: "Password errata" });
      }
      return done(null, user, { message: "Accesso Effettuato!" });
    } catch (error) {
      return done(error, { message: "Ops, c'è un errore. Ritenta" });
    }
  })
);

// Serialize and Deserialize user in the session
passport.serializeUser((user, done) => {
  done(null, user.id);
});
passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (error) {
    done(error, { message: "Ops, qualcosa è andato storto. Riprova" });
  }
});

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/api/events", eventRoute);
app.use("/api/user", userRoute);

app.listen(3000);

mongoose
  .connect(process.env.DB_URI)
  .then(() => {
    console.log("Connected to database");
  })
  .catch(() => {
    console.log("Connection failed");
  });
