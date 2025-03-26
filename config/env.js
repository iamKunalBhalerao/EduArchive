const { config } = require("dotenv");

config({ path: `.env.${process.env.NODE_ENV || "development"}.local` });

const { PORT } = process.env;

module.exports = {
  PORT,
};
