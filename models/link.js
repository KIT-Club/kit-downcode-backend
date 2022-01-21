const mongoose = require("../config/mongo");

const CodeSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("link", CodeSchema);
