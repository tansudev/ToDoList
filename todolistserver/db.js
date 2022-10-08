import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.CONNECTION_STRING);
    console.log("connected to database");
  } catch (error) {
    console.log(error);
  }
};
