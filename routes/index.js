const democode = require("./democode");

const apiResponse = require("../utils/apiResponse");
const Status = require("../constants/status");
const Message = require("../constants/message");

module.exports = (app) => {
  app.use("/democode", democode);
  app.all("/", (req, res) =>
    res.status(Status.OK).json(apiResponse(Status.OK, "This API is working"))
  );
  app.all("*", (req, res) =>
    res
      .status(Status.NOT_FOUND)
      .json(apiResponse(Status.NOT_FOUND, Message.NOT_FOUND))
  );
};
