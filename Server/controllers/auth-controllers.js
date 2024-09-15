const User = require("../models/user-model");

// Home Controller
const home = async (req, res) => {
  try {
    res.status(200).json({ msg: "Welcome to our home page" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// User Registration Logic
const register = async (req, res, next) => {
  try {
    const { fullname, email, mobileNumber, password, apartmentNumber, pincode, town, street } = req.body;

    // Validation
    if (!fullname || !email || !password || !mobileNumber || !pincode || !town || !street) {
      return res.status(400).json({ msg: "All fields are required" });
    }

    // Check if email already exists
    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(400).json({ msg: "Email already exists" });
    }

    // Create new user
    const userCreated = await User.create({
      fullname, 
      email, 
      mobileNumber, 
      password, 
      apartmentNumber, 
      pincode, 
      town,
      street
    });

    // Respond with success and token
    res.status(201).json({
      msg: "Registration Successful",
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (error) {

    // res.status(500).json({ message: "Internal server error" });
    next(error);
  }
};

// User Login Logic
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validation
    if (!email || !password) {
      return res.status(400).json({ msg: "All fields are required" });
    }

    // Check if user exists
    const userExist = await User.findOne({ email });

    if (!userExist) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    // Compare password
    const isPasswordValid = await userExist.comparePassword(password);

    if (!isPasswordValid) {
      return res.status(400).json({ msg: "Invalid email or password" });
    }

    // Respond with success and token
    res.status(200).json({
      msg: "Login Successful",
      token: await userExist.generateToken(),
      userId: userExist._id.toString(),
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { home, register, login };
