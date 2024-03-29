const express = require("express");
const router = express.Router();
const { getEvents, addEvent } = require("../controllers/event.controller");

router.get("/", getEvents);

router.post("/", addEvent);

module.exports = router;
