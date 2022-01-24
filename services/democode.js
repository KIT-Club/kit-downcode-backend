/* eslint-disable prettier/prettier */
const DemoCodeModel = require("../models/democode");

const getCode = async (content) => await DemoCodeModel.findOne({content});
const getValid = async (content) => {
  const result = await getCode(content);
  return result.valid;
};
const addCode = async (content) => {
  const {code, valid} = content;
  console.log(code);
  console.log(valid);
  return DemoCodeModel.create({code, valid});
};

module.exports = {
  getCode,
  getValid,
  addCode,
};
