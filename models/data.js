const mongoose = require("../config/mongo");

const DataSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  valid: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model("data", DataSchema);
