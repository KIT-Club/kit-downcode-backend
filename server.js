/* eslint-disable prettier/prettier */
const express = require("express");
require("dotenv").config();
const cors = require("cors");

const morganMiddleware = require("./utils/morgan");
const logger = require("./utils/winston");

const app = express();

const {PORT} = process.env;
const createRouter = require("./routes/createcode");

app.use(morganMiddleware);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use("/", createRouter);
require("./routes")(app);

app.listen(PORT, () =>
  logger.info(`Server is running at http://localhost:${PORT}`)
);
