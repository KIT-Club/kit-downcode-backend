const express = require("express");
require("dotenv").config();
const cors = require("cors");

const morganMiddleware = require("./utils/morgan");
const logger = require("./utils/winston");

const app = express();

const { PORT } = process.env;

app.use(morganMiddleware);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

require("./routes")(app);

app.listen(PORT, () =>
  logger.info(`Server is running at http://localhost:${PORT}`)
);
