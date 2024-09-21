const app = require("./app");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const dbConnection = require("./utils/db");

dotenv.config();

// PORT
const PORT = process.env.PORT || 8000;

// DB
const DB = process.env.DB;

// Connect to MongoDB
mongoose
  .connect(DB)
  .then(() => {
    console.log("Database connected successfully");
    // Start the server after successful DB connection
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
      // Call dbConnection for additional setup logic
      dbConnection();
    });
  })
  .catch((err) => {
    console.log("Database connection failed:", err);
  });
