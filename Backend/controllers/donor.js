const Donor = require("../models/Donor");

// CREATE DONOR
const createDonor = async (req, res) => {
  try {
    const newDonor = new Donor(req.body); // Use 'new Donor()' to create an instance
    const donor = await newDonor.save();
    res.status(201).json(donor);
  } catch (error) {
    res.status(500).json({ message: "Error creating donor", error });
  }
};

// GET ALL DONORS
const getAllDonors = async (req, res) => {
  try {
    const donors = await Donor.find().sort({ createdAt: -1 }); // Corrected variable name
    res.status(200).json(donors); // Corrected to use 'donors'
  } catch (error) {
    res.status(500).json({ message: "Error fetching donors", error });
  }
};

// UPDATE DONOR
const updateDonor = async (req, res) => {
  try {
    const updatedDonor = await Donor.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    if (!updatedDonor) {
      return res.status(404).json({ message: "Donor not found" });
    }

    res.status(200).json(updatedDonor); // Changed status code to 200 for successful update
  } catch (error) {
    res.status(500).json({ message: "Error updating donor", error });
  }
};

// GET ONE DONOR
const getOneDonor = async (req, res) => {
  try {
    const donor = await Donor.findById(req.params.id);
    if (!donor) {
      return res.status(404).json({ message: "Donor not found" });
    }
    res.status(200).json(donor);
  } catch (error) {
    res.status(500).json({ message: "Error fetching donor", error });
  }
};

// DELETE DONOR
const deleteDonor = async (req, res) => {
  try {
    const deletedDonor = await Donor.findByIdAndDelete(req.params.id);
    if (!deletedDonor) {
      return res.status(404).json({ message: "Donor not found" });
    }
    res.status(200).json({ message: "Donor deleted successfully" }); // Changed status code to 200
  } catch (error) {
    res.status(500).json({ message: "Error deleting donor", error });
  }
};

// STATS
const getDonorStats = async (req, res) => {
  try {
    const stats = await Donor.aggregate([
      {
        $group: {
          _id: "$bloodgroup",
          count: { $sum: 1 },
        },
      },
    ]);

    res.status(200).json(stats); // Corrected to use 'res.status'
  } catch (error) {
    res.status(500).json({ message: "Error fetching donor stats", error });
  }
};

module.exports = {
  deleteDonor,
  getOneDonor,
  getAllDonors,
  getDonorStats,
  updateDonor,
  createDonor,
};
