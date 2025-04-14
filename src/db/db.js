const mongoose = require("mongoose");
const { MONGO_URI, NODE_ENV } = require("../config/env.config");

if (!MONGO_URI) {
  throw new Error(
    "please define the MONGO_URI in environment variable inside .env.<development/production>.local"
  );
}

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log(`Connected to Database ${NODE_ENV} mode`);
  } catch (err) {
    res.status(403).json({
      message: "Failed to connect to the database",
      error: err.message,
    });
  }
};

module.exports = connectDB;
