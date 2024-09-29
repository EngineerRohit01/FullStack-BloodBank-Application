const Prospect = require("../models/Prospect");

// CREATE DONOR
const createProspect = async (req, res) => {
  try {
    const newProspect = new Prospect(req.body);
    const savedProspect = await newProspect.save(); // Changed to 'savedProspect'
    res.status(201).json(savedProspect);
  } catch (error) {
    res.status(500).json({ message: "Error creating Prospect", error });
  }
};

// GET ALL DONORS
const getAllProspects = async (req, res) => {
  try {
    const Prospects = await Prospect.find().sort({ createdAt: -1 }); // Corrected variable name
    res.status(200).json(Prospects); // Corrected to use 'Prospects'
  } catch (error) {
    res.status(500).json({ message: "Error fetching Prospects", error });
  }
};

// UPDATE DONOR
const updateProspect = async (req, res) => {
  try {
    const updatedProspect = await Prospect.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    if (!updatedProspect) {
      return res.status(404).json({ message: "Prospect not found" });
    }

    res.status(200).json(updatedProspect); // Changed status code to 200 for successful update
  } catch (error) {
    res.status(500).json({ message: "Error Prospect donor", error });
  }
};

// GET ONE PROSPECT
const getOneProspect = async (req, res) => {
  try {
    const Prospect = await Prospect.findById(req.params.id);
    if (!Prospect) {
      return res.status(404).json({ message: "Prospect not found" });
    }
    res.status(200).json(Prospect);
  } catch (error) {
    res.status(500).json({ message: "Error fetching Prospect", error });
  }
};

// DELETE DONOR
const deleteProspect = async (req, res) => {
  try {
    const deletedProspect = await Prospect.findByIdAndDelete(req.params.id);
    if (!deletedProspect) {
      return res.status(404).json({ message: "Prospect not found" });
    }
    res.status(200).json({ message: "Prospect deleted successfully" }); // Changed status code to 200
  } catch (error) {
    res.status(500).json({ message: "Error deleting donor", error });
  }
};

module.exports = {
  deleteProspect,
  getOneProspect,
  getAllProspects,
  updateProspect,
  createProspect,
};
