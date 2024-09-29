const express = require("express");
const {
  getAllDonors, // Use the correct function name
  getOneDonor,
  createDonor,
  updateDonor,
  deleteDonor,
} = require("../controllers/donor"); // Ensure this is pointing to the correct path
const { verifyTokenAndAuthorization } = require("../middlewares/verifyToken");
const router = express.Router();

// ADD DONOR
router.post("/", verifyTokenAndAuthorization, createDonor);

// GET ALL DONORS
router.get("/", getAllDonors); // Corrected to use 'getAllDonors'

// UPDATE DONOR
router.put("/:id", updateDonor);

// GET ONE DONOR
router.get("/find/:id", getOneDonor);

// DELETE DONOR
router.delete("/:id", deleteDonor);

module.exports = router;
