//const DemoCodeModel = require("../models/data");
const linkModel = require("../models/link");
const { customAlphabet } = require("nanoid");
const nanoid = customAlphabet("1234567890", 10);

const getCode = async (_id) => await linkModel.findOne({ _id });
const getValid = async (content) => {
  const result = await getCode(content);
  return result.valid;
};
const addCode = async (content) => {
  content._id = nanoid();
  const { _id, link } = content;
  console.log(content);
  return linkModel.create({ _id, link });
};

module.exports = {
  getCode,
  getValid,
  addCode,
};
