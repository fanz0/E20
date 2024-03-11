const express = require("express");
const session = require("express-session");
const crypto = require("crypto");
const app = express();
const mongoose = require("mongoose");
const eventRoute = require("./routes/event.route");
const cors = require("cors");
const userRoute = require("./routes/user.route");
const cookieParser = require("cookie-parser");
const verifyJWT = require("./middleware/verifyJWT");
require("dotenv").config();

// CORS configure
app.use(
  cors({
    origin: "http://localhost:5173",
    method: ["GET", "POST"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/api/events", eventRoute);
app.use("/api/user", userRoute);

app.get("/", verifyJWT, (req, res) => {
  res.status(200).json({ message: "Accesso Consentito" });
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
