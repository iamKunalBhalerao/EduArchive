import mongoose from "mongoose";
import { databaseNM } from "../contants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGO_URI}/${databaseNM}`
    );
    console.log(
      `Connected to Database !! DB HOST:${connectionInstance.connection.host}`
    );
  } catch {
    (err) => {
      console.log("MONGODB Connection FAILED : ", err);
      process.exit(1);
    };
  }
};
export { connectDB };
