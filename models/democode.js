const mongoose = require("../config/mongo");

const DemoCodeSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
  },
  valid: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model("demoCode", DemoCodeSchema);
