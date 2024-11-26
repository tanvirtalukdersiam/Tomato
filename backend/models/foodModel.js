import mongoose, { Schema } from "mongoose";

const foodSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  image: { type: String },
});

const foodModel =
  mongoose.models.food || mongoose.model("foodSchema", foodSchema);
export default foodModel;
