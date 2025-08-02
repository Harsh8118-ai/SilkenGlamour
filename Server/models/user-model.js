const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Define the User schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
     default: "",
    trim: true,
  },
  email: {
    type: String,
     default: "",
    unique: true,
    trim: true,
  },
  mobileNumber: {
    type: String,
     default: "",
  },
  password: {
    type: String,
     default: "",
  },
  pincode: {
    type: String,
     default: "",
  },
  town: {
    type: String,
     default: "",
  },
  street: {
    type: String,
     default: "",
  },
  apartmentNumber: {
    type: String,
     default: "",
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
}, { timestamps: true });
7
// Password Hashing Middleware
userSchema.pre("save", async function (next) {
  const user = this;

  // Only hash the password if it has been modified (or is new)
  if (!user.isModified("password")) {
    return next();
  }

  try {
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

// Compare Password Method
userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Generate Token Method
userSchema.methods.generateToken = function () {
  return jwt.sign(
    {
      userId: this._id.toString(),
      mobileNumber: this.mobileNumber,
      isAdmin: this.isAdmin,
    },
    process.env.JWT_SECRET_KEY,
    {
      expiresIn: "30d",
    }
  );
};

// Export User model
const User = mongoose.model("User", userSchema);
module.exports = User;
