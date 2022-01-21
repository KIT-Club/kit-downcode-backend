const DemoCodeService = require("../services/democode");
const logger = require("../utils/winston");
const apiResponse = require("../utils/apiResponse");
const Status = require("../constants/status");
const Message = require("../constants/message");

const getCode = async (req, res) => {
  try {
    const { code } = req.body;
    const result = await DemoCodeService.getCode(code);
    if (!result) {
      return res
        .status(Status.NOT_FOUND)
        .json(
          apiResponse(Status.NOT_FOUND, "This is the message from controller")
        );
    }
    return res
      .status(Status.OK)
      .json(apiResponse(Status.OK, Message.OK, result));
  } catch (error) {
    logger.error(error);
    return res
      .status(Status.INTERNAL_SERVER_ERROR)
      .json(
        apiResponse(Status.INTERNAL_SERVER_ERROR, Message.INTERNAL_SERVER_ERROR)
      );
  }
};

module.exports = {
  getCode,
};
