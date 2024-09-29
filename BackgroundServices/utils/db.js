const dotenv = require("dotenv");
const mongoose = require("mongoose");

// Load environment variables
dotenv.config();

// DB
const DB = process.env.DB;

const dbConnection = async () => {
  try {
    await mongoose.connect(DB); // Removed deprecated options
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Database connection failed:", error);
    setTimeout(dbConnection, 5000); // Retry connection after 5 seconds
  }
};

module.exports = dbConnection; // Export the connection function
