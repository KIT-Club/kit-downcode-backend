const DemoCodeModel = require("../models/data");

const getCode = async (code) => await DemoCodeModel.find({ code });
const getValid = async (content) => {
  const result = await getCode(content);
  return result.valid;
};
const addCode = async (content) => {
  content.code = (Math.floor(Math.random() * 100000) + 100000).toString();
  const { code, link, valid } = content;
  console.log(content);
  return DemoCodeModel.create({ code, link, valid });
};

module.exports = {
  getCode,
  getValid,
  addCode,
};
