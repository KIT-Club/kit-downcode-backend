const apiResponse = require("../utils/apiResponse");
const Status = require("../constants/status");
const Message = require("../constants/message");
const search = require("./search");
const create = require("./create");

module.exports = (app) => {
  app.use("/create", create);
  app.use("/search", search);
  app.all("/", (req, res) =>
    res.status(Status.OK).json(apiResponse(Status.OK, "This API is working"))
  );
  app.all("*", (req, res) =>
    res
      .status(Status.NOT_FOUND)
      .json(apiResponse(Status.NOT_FOUND, Message.NOT_FOUND))
  );
};
