/* eslint-disable prettier/prettier */
const logger = require("../utils/winston");
const apiResponse = require("../utils/apiResponse");

const Status = require("../constants/status");
const Message = require("../constants/message");
const RandomCodeService = require("../services/randomcode");

const randomCode = async (req, res) => {
  try {
    const links = req.body;
    const failedLinks = req.somevariable;
    const correctLinks = links.filter(
      (item, index) => !failedLinks.includes(index)
    );
    const result = await RandomCodeService.getCode(correctLinks);
    return res
      .status(Status.OK)
      .json(apiResponse(Status.OK, "Successfully", result, failedLinks));
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

module.exports = randomCode;
