/* eslint-disable prettier/prettier */
const nanoid = require("../utils/nanoid");
const CodeModel = require("../models/link");

const isExist = async (item) => {
  const linkIsExist = await CodeModel.findOne({
    link: item.link,
  });
  return linkIsExist;
};

const createCode = async (item) => {
  const newCode = nanoid();
  const newLink = new CodeModel({
    _id: newCode,
    link: item.link,
  });
  await newLink.save();
  return newLink;
};

const getCode = async (links) => {
  let data = [];

  await Promise.all(
    links.map(async (item) => {
      const linkItem = await isExist(item);
      if (linkItem) {
        data.push({_id: linkItem._id, link: linkItem.link});
      } else {
        const newLinkItem = await createCode(item);
        data.push({_id: newLinkItem._id, link: newLinkItem.link});
      }
    })
  );

  return data;
};

module.exports = {getCode};
