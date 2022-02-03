/* eslint-disable prettier/prettier */
const {customAlphabet} = require("nanoid");

const nanoid = customAlphabet("0123456789", 8);

module.exports = nanoid;
