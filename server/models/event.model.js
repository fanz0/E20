const mongoose = require("mongoose");

// Create Schema
const EventSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  URLposter: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
});

// Create model
const Event = mongoose.model("event", EventSchema);

module.exports = Event;
