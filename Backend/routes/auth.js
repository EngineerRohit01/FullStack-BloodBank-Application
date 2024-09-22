const express = require("express");
const { loginUser, registerUser } = require("../controllers/auth"); // Import both loginUser and registerUser
const router = express.Router();

// LOGIN ROUTER
router.post("/login", loginUser);

// REGISTER ROUTER
router.post("/register", registerUser);

module.exports = router; // Ensure you're exporting the router correctly
