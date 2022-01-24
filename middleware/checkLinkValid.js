/* eslint-disable prettier/prettier */
const DemoCodeService = require("../services/democode");
const logger = require("../utils/winston");
const apiResponse = require("../utils/apiResponse");

const Status = require("../constants/status");
const Message = require("../constants/message");

const checkLinkValid = (req, res, next) => {
  try {
    const link = req.body;
    console.log(link);
    var expression1 =
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
    var expression2 =
      /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
    var regex1 = new RegExp(expression1);
    var regex2 = new RegExp(expression2);
    if (!link[0].link.match(regex1) && !link[0].link.match(regex2)) {
      return res
        .status(Status.NON_AUTHORITATIVE_INFORMATION)
        .json(
          apiResponse(
            Status.NON_AUTHORITATIVE_INFORMATION,
            "Link invalid. This is  the message from middleware"
          )
        );
    }
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
  checkLinkValid,
};
