/* eslint-disable prettier/prettier */
const randomCodeModel = require("../models/codemodels");
const {customAlphabet} = require("nanoid");

const nanoid = customAlphabet("1234567890", 8);

const randomCode = (links) => {
  links.map(async (item) => {
    const isExit = await randomCodeModel.findOne({
      link: item.link,
    });
    if (!isExit) {
      const newCode = await nanoid();
      const newLink = new randomCodeModel({
        link: item.link,
        code: newCode,
      });
      await randomCodeModel.create(newLink);
    }
  });
};

module.exports = {
  randomCode,
};
