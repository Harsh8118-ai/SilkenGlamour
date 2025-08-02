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
    if (!username || !email || !password || !mobileNumber) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if email already exists
    const userExist = await User.findOne({ mobileNumber });

    if (userExist) {
      return res.status(400).json({ message: "Mobile Number already exists" });
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
      return res.status(400).json({ message: "Invalid Mobile Number or Password" });
    }

    // Compare password
    const isPasswordValid = await userExist.comparePassword(password);

    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid Mobile Number or Password" });
    }

    // Respond with success and token
    return res.status(200).json({
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

const user = async (req, res) => {
  try {
    const userData = req.user;
    return res.status(200).json({ userData });

  } catch (error) {
    console.log(`error from the user route ${error}`);

  }
}


const UpdateProfile = async (req, res) => {
  try {
    const { username = "", mobileNumber = "" } = req.body;
    const userid = req.user;

    const userDetails = await User.findById(userid);
    if (!userDetails) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    if (username) userDetails.username = username;
    if (mobileNumber) userDetails.mobileNumber = mobileNumber;

    await userDetails.save();

    const updatedUserDetails = await User.findById(userid).exec();

    return res.status(200).json({
      success: true,
      message: "Profile Updated Successfully",
      data: updatedUserDetails,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server error, while updating profile",
      error: error.message,
    });
  }
};


const UpdateAddress = async (req, res) => {

  try {
    //  fetch the data from req body
    const { apartmentNumber = "", street = "", town = "", pincode = "" } = req.body;

    const userid = req.user;



    //   // find Profile
    const userDetails = await User.findById(userid);


    userDetails.street = street;
    userDetails.apartmentNumber = apartmentNumber;
    userDetails.town = town;
    userDetails.pincode = pincode;

    await userDetails.save()
    const updatedUserDetails = await User.findById(userid).exec()

    return res.status(200).json({
      success: true,
      message: "Address Updated Successfully",
      data: updatedUserDetails,
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server error, while updating Address",
      error: error.message,
    })
  }
}

// OAuth Login (Google/GitHub)
const oauthLogin = async (req, res) => {
  try {
    const { email, username, googleId, githubId } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    let user;

    // 🔹 First, check if user exists by OAuth ID
    if (googleId) {
      user = await User.findOne({ googleId });
    } else if (githubId) {
      user = await User.findOne({ githubId });
    }

    // 🔹 If no user found by OAuth ID, check by email
    if (!user) {
      user = await User.findOne({ email });

      // 🔹 If user exists but doesn't have OAuth ID, update it
      if (user) {
        if (googleId) user.googleId = googleId;
        if (githubId) user.githubId = githubId;
        user.authProvider = googleId ? "google" : "github";
        await user.save();
      }
    }

    // 🔹 If user still doesn't exist, create a new one
    if (!user) {
      let uniqueUsername = username;
      let count = 1;
      while (await User.findOne({ username: uniqueUsername })) {
        uniqueUsername = `${username}${count++}`;
      }

      user = new User({
        username: uniqueUsername,
        email,
        googleId,
        githubId,
        authProvider: googleId ? "google" : "github",
      });

      await user.save();
    }

    console.log("User Auth Provider:", user.authProvider);

    // 🔹 Generate and send token
    const token = generateToken(user);
    res.redirect(
      `${process.env.FRONTEND_URL}/oauth-success?token=${token}&username=${user.username}`
    );
  } catch (error) {
    console.error("OAuth Login Error:", error);
    res.redirect(`${process.env.FRONTEND_URL}/login?error=OAuthFailed`);
  }
};


module.exports = { home, register, login, user, UpdateProfile, UpdateAddress, oauthLogin };
