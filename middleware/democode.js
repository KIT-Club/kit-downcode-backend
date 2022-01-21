const DemoCodeService = require("../services/democode");
const logger = require("../utils/winston");
const apiResponse = require("../utils/apiResponse");

const Status = require("../constants/status");
const Message = require("../constants/message");
const democode = require("../models/democode");

const checkCodeValid = async (req, res, next) => {
  try {
    const { code } = req.body;
    const valid = await DemoCodeService.getValid(code);
    if (!valid) {
      return res
        .status(Status.UNAUTHORIZED)
        .json(
          apiResponse(
            Status.UNAUTHORIZED,
            "Code not valid. This is the message from middleware"
          )
        );
    }
    req.code = code;
    res.locals = await DemoCodeService.getCode(code);
    next();
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
  checkCodeValid,
};
