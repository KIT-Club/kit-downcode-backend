const DemoCodeService = require("../services/democode");
const logger = require("../utils/winston");
const apiResponse = require("../utils/apiResponse");
const Status = require("../constants/status");
const Message = require("../constants/message");
const postCode = async (req, res) => {
  try {
    if (!req.body) {
      return res
        .status(Status.BAD_REQUEST)
        .json(
          apiResponse(Status.BAD_REQUEST, "This is the message from controller")
        );
    }
    await DemoCodeService.addCode(req.body);
    return res
      .status(Status.NO_CONTENT)
      .json(
        apiResponse(Status.NO_CONTENT, "This is the message from controller")
      );
  } catch (error) {
    logger.error(error);
    return res
      .status(Status.INTERNAL_SERVER_ERROR)
      .json(
        apiResponse(Status.INTERNAL_SERVER_ERROR, Message.INTERNAL_SERVER_ERROR)
      );
  }
};
module.exports = { postCode };
