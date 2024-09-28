const express = require("express");
const { createProspect } = require("../controllers/prospect");
const router = express.Router();

//ADD PROSPECT
router.post("/", createProspect);

//GET ALL PROSPECTS
router.get("/", getAllProspect);

//UPDATE PROSPECT
router.put("/:id", updateProspect);

//DELETE PROSPECT
router.delete("/:id", deleteProspect);

//GET ONE PROSPECT
router.post("/find/:id", getOneProspect);

module.exports = router;
