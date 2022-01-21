const DemoLinkModel = require("../services/demolink");
const logger = require("../utils/winston");
const apiResponse = require("../utils/apiResponse");
const Status = require("../constants/status");
const Message = require("../constants/message");

const getLink = async (req, res) => {
  try {
    const { link } = req.body;
    const result = await DemoLinkModel.getLink(link);
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
const postLink = async (req, res) => {
  try {
    if (!req.body) {
      return res
        .status(Status.BAD_REQUEST)
        .json(
          apiResponse(Status.BAD_REQUEST, "This is the message from controller")
        );
    }
    await DemoLinkModel.addLink(req.body);
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
  getLink,
  postLink,
};
