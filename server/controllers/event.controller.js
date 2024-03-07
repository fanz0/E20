const Event = require("../models/event.model");

const getEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error);
  }
};

const addEvent = async (req, res) => {
  try {
    const event = await Event.create(req.body);
    res.status(200).json({ message: "Uploaded successfully!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error);
  }
};

module.exports = { getEvents, addEvent };
