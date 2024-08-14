const express = require("express");
const router = express.Router();

const {
  getAllPets,
  getFilteredPets,
  addPet,
} = require("../controllers/petControllers");

router.get("/get-pets", getAllPets);
router.get("/get-filtered-pets", getFilteredPets);
router.post("/add-pet", addPet);

module.exports = router;
