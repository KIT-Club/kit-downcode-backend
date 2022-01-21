const DemoLinkModel = require("../models/link");

const getLink = async (content) => await DemoLinkModel.findOne({ content });
const addLink = async (content) => {
  const { _id, link } = content;
  return DemoLinkModel.create({ _id, link });
};
module.exports = {
  getLink,
  addLink,
};
