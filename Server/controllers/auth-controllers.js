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
    const { username, email, mobileNumber, password, apartmentNumber, pincode, town, street } = req.body;

    // Validation
    if (!username || !email || !password || !mobileNumber || !pincode || !town || !street) {
      return res.status(400).json({ msg: "All fields are required" });
    }

    // Check if email already exists
    const userExist = await User.findOne({ mobileNumber });

    if (userExist) {
      return res.status(400).json({ msg: "Mobile Number already exists" });
    }

    // Create new user
    const userCreated = await User.create({
      username, 
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
    const { mobileNumber, password } = req.body;

    // Validation
    if (!mobileNumber || !password) {
      return res.status(400).json({ msg: "All fields are required" });
    }

    // Check if user exists
    const userExist = await User.findOne({ mobileNumber });

    if (!userExist) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    // Compare password
    const isPasswordValid = await userExist.comparePassword(password);

    if (!isPasswordValid) {
      return res.status(400).json({ msg: "Invalid Mobile Number or password" });
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

// *-------------------
// to send user data - User Logic
// *-------------------

const user = async(req, res) => {
  try {
    const userData = req.user;
    console.log(userData);
    return res.status(200).json({ userData });

  } catch (error) {
    console.log(`error from the user route ${error}`);
    
  }
}


module.exports = { home, register, login, user };
