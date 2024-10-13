import foodModel from "../models/foodModel.js";
import fs from "fs";

//add food item

const addFood = async (req, res) => {
  let image_filename = req.file ? req.file.filename : null;
  if (!image_filename) {
    return res
      .status(400)
      .json({ success: false, message: "Image file is required" });
  }

  const food = new foodModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: image_filename,
  });
  try {
    await food.save();
    res
      .status(201)
      .json({ success: true, message: "Food item added successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

//all food list
const listFood = async (req, res) => {
  try {
    const foods = await foodModel.find({});
    res.json({ success: true, data: foods });
  } catch (error) {
    console.log(error);
    console.log("Error in listFood");
    res.status(500).json({ success: false, message: error.message });
  }
};

//remove food item
const removeFood = async (req, res) => {
  try {
    const food = await foodModel.findById(req.body.id);
    fs.unlink(`uploads/${food.image}`, () => {});

    await foodModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Food item removed successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

export { addFood, listFood, removeFood };