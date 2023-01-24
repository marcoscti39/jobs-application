import mongoose from "mongoose";

export const connectDatabase = () => {
  console.log("database connected");
  mongoose.set("strictQuery", false);
  mongoose.connect(process.env.MONGO_ACCESS!);
};
