/* eslint-disable prettier/prettier */
const express = require("express");
const router = express.Router();

const apiResponse = require("../utils/apiResponse");
const Status = require("../constants/status");
const Messsage = require("../constants/message");

const createCodeController = require("../controllers/createCodeController");
const middleware = require("../middleware/checkLinkValid");

// router.use("/create", middleware.checkLinkValid);
router.get("/create", (req, res) => {
  res.json("Create code page");
});
router.post("/create", middleware.checkLinkValid, createCodeController);
router.all("/create", (req, res) => {
  res
    .status(Status.UNAUTHORIZED)
    .json(apiResponse(Status.UNAUTHORIZED, Messsage.UNAUTHORIZED));
});

module.exports = router;
