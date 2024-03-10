const express = require("express");
const session = require("express-session");
const crypto = require("crypto");
const app = express();
const mongoose = require("mongoose");
const eventRoute = require("./routes/event.route");
const cors = require("cors");
const User = require("./models/user.model");
const userRoute = require("./routes/user.route");
const bcrypt = require("bcrypt");
require("dotenv").config();

// CORS configure
app.use(
  cors({
    origin: "https://e20-seven.vercel.app",
    method: ["GET", "POST"],
    credentials: true,
  })
);

// Session Configure
app.use(
  session({
    secret: crypto.randomBytes(64).toString("hex"),
    resave: false,
    saveUninitialized: true,
    cookie: {
      sameSite: "none",
      secure: true,
    },
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/events", eventRoute);
app.use("/api/user", userRoute);

app.get("/", (req, res) => {
  if (req.session.isAuth) {
    res.status(200).json({ message: "Active" });
  } else {
    res.status(200).json({ message: "Inactive" });
  }
});

app.listen(process.env.PORT);

mongoose
  .connect(process.env.DB_URI)
  .then(() => {
    console.log("Connected to database");
  })
  .catch((error) => {
    console.log("Connection failed");
    console.error(error);
  });
