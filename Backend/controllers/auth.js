const CryptoJs = require("crypto-js");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const dotenv = require("dotenv");
dotenv.config();

// REGISTER USER
const registerUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    // Check if the role is valid (optional: implement your own logic)
    if (role && role !== "user" && role !== "admin") {
      return res
        .status(400)
        .json({ message: "Role must be 'user' or 'admin'" });
    }

    const newUser = new User({
      name,
      email,
      password: CryptoJs.AES.encrypt(
        password,
        process.env.PASS // Ensure PASS is properly set in .env
      ).toString(),
      role: role || "user", // Default to 'user' if no role is specified
    });

    const user = await newUser.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};

// LOGIN USER
const loginUser = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(401).json("You Have Not Registered");
    }

    const hashedPassword = CryptoJs.AES.decrypt(
      user.password,
      process.env.PASS // Ensure PASS is properly set in .env
    );

    const originalPassword = hashedPassword.toString(CryptoJs.enc.Utf8);

    if (originalPassword !== req.body.password) {
      return res.status(401).json("Wrong Password");
    }

    const { password, ...info } = user._doc;

    const accessToken = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SEC, // Ensure JWT_SEC is properly set in .env
      { expiresIn: "10d" } // Corrected the typo from expiresIN to expiresIn
    );

    res.status(200).json({ ...info, accessToken });
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { loginUser, registerUser };
