/* eslint-disable prettier/prettier */
const Message = require("../constants/message");
const randomCodeService = require("../services/randomcode");
const apiResponse = require("../utils/apiResponse");
const randomCodeModel = require("../models/codemodels");
const logger = require("../utils/winston");
const Status = require("../constants/status");

const printCode = (req, res) => {
  try {
    const arrayCode = [];
    const links = req.body;
    console.log(links);
    links.map(async (link) => {
      const elInDB = await randomCodeModel.findOne({link: link.link});
      console.log(elInDB);
      arrayCode.push(elInDB.code);
    });
    console.log(arrayCode);
    return res
      .status(Status.OK)
      .json(
        apiResponse(
          Status.OK,
          "this is meassage from printCodeController",
          arrayCode
        )
      );
  } catch (error) {
    logger.error(error);
    return res
      .status(Status.INTERNAL_SERVER_ERROR)
      .json(
        apiResponse(Status.INTERNAL_SERVER_ERROR),
        Message.INTERNAL_SERVER_ERROR
      );
  }
};

module.exports = printCode;
