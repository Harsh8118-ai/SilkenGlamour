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

const user = async(req, res) => {
  try {
    const userData = req.user;
    console.log(userData);
    return res.status(200).json({ userData });

  } catch (error) {
    console.log(`error from the user route ${error}`);
    
  }
}


const UpdateProfile = async(req,res) => {
  
  try {
      //  fetch the data from req body
      const { username= ""} = req.body;

      const userid = req.user;
      console.log("Userid", userid);
      
   

    //   // find Profile
      const userDetails = await User.findById(userid);

     
     userDetails.username = username;
    //  userDetails.email = email;
     
    //  userDetails.mobileNumber = mobileNumber;
  
     // save the updated profile
     await userDetails.save()
    //  await profileDetails.save();

     console.log("User details" , userDetails);

     // Find the updated user details
       const updatedUserDetails = await User.findById(userid).exec() 

     


      
      return res.status(200).json({
          success:true,
          message:"Profile Updated Successfully",
          data: updatedUserDetails,
      })
  } catch (error) {
      return res.status(500).json({
          success:false,
          message:"Internal Server error, while updating profile",
          error:error.message,
      })
    }
}

const UpdateAddress = async(req,res) => {
  
  try {
      //  fetch the data from req body
      const { apartmentNumber= "", street="", town="", pincode="" } = req.body;

      const userid = req.user;
      console.log("Userid", userid);
      
   

    //   // find Profile
      const userDetails = await User.findById(userid);

     
     userDetails.street = street;
     userDetails.apartmentNumber = apartmentNumber;
     userDetails.town = town;
     userDetails.pincode = pincode;
  
     // save the updated profile
     await userDetails.save()
    //  await profileDetails.save();

     console.log("User details" , userDetails);

     // Find the updated user details
       const updatedUserDetails = await User.findById(userid).exec() 

     


      
      return res.status(200).json({
          success:true,
          message:"Address Updated Successfully",
          data: updatedUserDetails,
      })
  } catch (error) {
      return res.status(500).json({
          success:false,
          message:"Internal Server error, while updating Address",
          error:error.message,
      })
    }
}


module.exports = { home, register, login, user , UpdateProfile, UpdateAddress};
