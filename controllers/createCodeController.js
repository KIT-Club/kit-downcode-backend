/* eslint-disable prettier/prettier */
const createCodeService = require("../services/randomcode");
const logger = require("../utils/winston");
const apiResponse = require("../utils/apiResponse");

const Status = require("../constants/status");
const Message = require("../constants/message");
const randomCodeService = require("../services/randomcode");

const randomCode = async (req, res) => {
  try {
    const links = req.body;

    const result = await randomCodeService.codeData(links);

    console.log("result", result);

    setTimeout(() => {
      return res
        .status(Status.OK)
        .json(apiResponse(Status.OK, "Successfully", result));
    }, 1000);

    if (!result) {
      return res
        .status(Status.NOT_FOUND)
        .json(apiResponse(Status.NOT_FOUND, "This is message from controller"));
    }

    // return res
    //   .status(Status.OK)
    //   .json(apiResponse(Status.OK, "Successfully", result));
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
