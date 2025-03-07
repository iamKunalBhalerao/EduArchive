const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://kunalbhalerao789:kunal%400987654321@cluster01.hm8ab.mongodb.net/EduArchive"
  );
  console.log("Connected to DB");
};

module.exports = connectDB;
