const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cron = require("node-cron");
const dbConnection = require("./utils/db");
const {
  sendDetailsProspectEmail,
} = require("./EmailServices/sendDetailsProspect");
const {
  sendEligibilityEmail,
} = require("./EmailServices/sendEligibilityEmail");
const {
  sendBloodDonationReminder,
} = require("./EmailServices/sendBloodDonationReminder");
const {
  sendDonorDetailsEmail,
} = require("./EmailServices/sendDonorDetailsEmail");
dotenv.config();

//SCHEDULE TASK
const run = () => {
  cron.schedule("* * * * * *", () => {
    sendDetailsProspectEmail();
    sendEligibilityEmail();
    sendBloodDonationReminder();
    sendDonorDetailsEmail();
  });
};

//SERVER
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Backgroundservices is running on ${process.env.PORT}`);
  dbConnection();
});
