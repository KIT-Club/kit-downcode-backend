const DemoCodeService = require("../services/democode");
const logger = require("../utils/winston");
const apiResponse = require("../utils/apiResponse");
const DemoLinkService = require("../services/demolink");
const Status = require("../constants/status");
const Message = require("../constants/message");

const getCode = async (req, res) => {
  try {
    console.log(res.locals);
    const { code } = req.body;
    const result = await DemoCodeService.getCode(code);
    if (!result) {
      return res
        .status(Status.NOT_FOUND)
        .json(
          apiResponse(Status.NOT_FOUND, "This is the message from controller")
        );
    }
    console.log(result._id);
    res.locals = result;
    console.log(res.locals);
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

const postCode = async (req, res) => {
  try {
    if (!req.body) {
      return res
        .status(Status.BAD_REQUEST)
        .json(
          apiResponse(Status.BAD_REQUEST, "This is the message from controller")
        );
    }
    console.log(req.body);
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

module.exports = {
  getCode,
  postCode,
};
