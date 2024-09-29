const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cron = require("node-cron");
const dbConnection = require("./utils/db");
dotenv.config();

//SCHEDULE TASK
const run = () => {
  cron.schedule("* * * * * *", () => {});
};

//SERVER
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Backgroundservices is running on ${process.env.PORT}`);
  dbConnection();
});
