/* eslint-disable prettier/prettier */
const mongoose = require("../config/mongo");

const LinkSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
  {
    collection: "links",
  }
);

module.exports = mongoose.model("code", LinkSchema);
