import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://anhhtuann:tuan2525@cluster0.uk5pa.mongodb.net/food-del"
    )
    .then(() => {
      console.log("Database connected successfully");
    });
};
