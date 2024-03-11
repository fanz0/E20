const express = require("express");
const app = express();
const mongoose = require("mongoose");
const eventRoute = require("./routes/event.route");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const userRoute = require("./routes/user.route");
require("dotenv").config();

// CORS configure
app.use(
  cors({
    origin: "https://e20-seven.vercel.app",
    method: ["GET", "POST"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/api/events", eventRoute);
app.use("/api/user", userRoute);

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
