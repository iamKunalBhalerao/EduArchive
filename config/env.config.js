const { config } = require("dotenv");

config({ path: `.env.${process.env.NODE_ENV || "development"}.local` });

const { PORT, MONGO_URI, NODE_ENV } = process.env;

module.exports = {
  PORT,
  MONGO_URI,
  NODE_ENV,
};
