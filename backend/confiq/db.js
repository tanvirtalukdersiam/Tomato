import mongoose from "mongoose";

export const connectDb = async () => {
  await mongoose
    .connect(
      "mongodb+srv://food-order:LPXBCUSxRECqCeQJ@cluster0.ocg1e0g.mongodb.net/food-order?retryWrites=true&w=majority&appName=Cluster0"
    )
    .then(() => {
      console.log("Database connection established");
    });
};
