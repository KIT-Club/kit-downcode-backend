/* eslint-disable prettier/prettier */
const mongoose = require("../config/mongo");

const codeSchemma = new mongoose.Schema({
  link: {
    type: String,
    require: true,
  },
  code: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("randomCode", codeSchemma);
