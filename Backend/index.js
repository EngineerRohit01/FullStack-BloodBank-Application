const app = require("./app");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const dbConnection = require("./utils/db");

// Load environment variables
dotenv.config();

// PORT
const PORT = process.env.PORT || 8000;

// Connect to MongoDB and start the server
const startServer = async () => {
  try {
    await dbConnection(); // Ensure DB connection is established
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (err) {
    console.log("Database connection failed:", err);
  }
};

startServer(); // Call the function to start the server
