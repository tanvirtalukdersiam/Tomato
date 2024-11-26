import foodModel from "../models/foodModel.js";
import fs from "fs";

const addFood = async (req, res) => {
  // Validate required fields
  if (!req.body.name || !req.body.price || !req.file) {
    return res
      .status(400)
      .json({ success: false, message: "Missing required fields" });
  }

  const addFood = new foodModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: `${req.file.filename}`, // Save the relative path
  });

  try {
    await addFood.save();
    res.status(201).json({ success: true, message: "Food added successfully" });
  } catch (error) {
    // Cleanup the uploaded file if saving fails
    if (req.file) {
      fs.unlinkSync(`uploads/${req.file.filename}`);
    }
    console.error(error);
    res.status(400).json({ error: error.message });
  }
};

const listFood = async function (req, res) {
  try {
    const foods = await foodModel.find({});
    res.json({ success: true, data: foods });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

const removeFood = async function (req, res) {
  try {
    const food = await foodModel.findById(req.body.id);
    fs.unlink(`uploads/${food.image}`, () => {});
    await foodModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Food removed " });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export { addFood, listFood, removeFood };
