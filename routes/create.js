const express = require("express");
const router = express.Router();

const apiResponse = require("../utils/apiResponse");
const Status = require("../constants/status");
const Message = require("../constants/message");
const DemoCodeController = require("../controllers/createCode");

/* Neu muon dung middleware thi them vao day
router.use(middleware) */
router.get("/", (req, res) => {
  res.send("Day la trang tao code");
});
router.post("/", DemoCodeController.postCode);
router.all("/", (req, res) =>
  res
    .status(Status.NOT_IMPLEMENTED)
    .json(apiResponse(Status.NOT_IMPLEMENTED, Message.NOT_IMPLEMENTED))
);

module.exports = router;
