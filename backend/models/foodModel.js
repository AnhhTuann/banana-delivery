import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter the name of the food"],
  },
  description: {
    type: String,
    required: [true, "Please enter the description of the food"],
  },
  price: {
    type: Number,
    required: [true, "Please enter the price of the food"],
  },
  image: {
    type: String,
    required: [true, "Please enter the image of the food"],
  },
  category: {
    type: String,
    required: [true, "Please enter the category of the food"],
  },
});

const foodModel = mongoose.models.food || mongoose.model("food", foodSchema);

export default foodModel;
