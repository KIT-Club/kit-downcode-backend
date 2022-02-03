/* eslint-disable prettier/prettier */
const express = require("express");
const router = express.Router();

const apiResponse = require("../utils/apiResponse");
const Status = require("../constants/status");
const Messsage = require("../constants/message");

const CreateCodeController = require("../controllers/createcode");
const middleware = require("../middleware/checkLinkValid");

router.get("/create", (req, res) => {
  res.json("Create code page");
});
router.post("/create", middleware.checkLinkValid, CreateCodeController);
router.all("/create", (req, res) => {
  res
    .status(Status.UNAUTHORIZED)
    .json(apiResponse(Status.UNAUTHORIZED, Messsage.UNAUTHORIZED));
});

module.exports = router;
