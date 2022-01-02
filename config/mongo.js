require("dotenv").config();
const mongoose = require("mongoose");
const logger = require("../utils/winston");

const db = process.env.MONGO_URI;

if (db) {
  mongoose.connect(
    db,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err) => {
      if (err) {
        logger.error("Unable to connect to the database:", err);
        return;
      }
      logger.info(
        "The connection to the database has been established successfully."
      );
    }
  );
} else logger.error("Please config MONGO_URI in .env file.");

module.exports = mongoose;
