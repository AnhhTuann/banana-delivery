import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import validator from "validator";

//login user
const loginUser = async (req, res) => {};

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

//register user
const registerUser = async (req, res) => {
  const { name, password, email } = req.body;
  try {
    const exists = await userModel.findOne({ email });
    console.log(exists);
  } catch (error) {
    console.log(error);
    res.json({ sucess: false, message: "Something went wrong" });
  }
};

export { loginUser, registerUser };
