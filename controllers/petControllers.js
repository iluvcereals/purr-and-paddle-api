const { pets } = require("../petData");

const getAllPets = (req, res) => {
  res.status(200).json({ pets });
};

const getFilteredPets = (req, res) => {
  const { petType, petBreed, petAge, petCompatibility, petGender } = req.query;

  let filteredPets = pets.filter((pet) => {
    return (
      (!petType || pet.type === petType) &&
      (!petBreed || pet.breed === petBreed) &&
      (!petAge || pet.age === petAge) &&
      (!petGender || pet.gender === petGender) &&
      (!petCompatibility || pet.compatibility === petCompatibility)
    );
  });

  if (filteredPets.length === 0) {
    return res
      .status(404)
      .json({ msg: `No pets found matching the provided criteria.` });
  }

  res.status(200).json({ pets: filteredPets });
};

const addPet = (req, res) => {
  const {
    type,
    breed,
    age,
    gender,
    compatibility,
    ownerName,
    ownerEmail,
    description,
  } = req.body;

  const defaultDog = "src/assets/default-dog.jpeg";
  const defaultCat = "src/assets/default-cat.jpg";
  const img = type === "dog" ? defaultDog : defaultCat;
  const newPet = {
    id: pets.length + 1,
    type,
    img,
    breed,
    age,
    gender,
    compatibility,
    ownerName,
    ownerEmail,
    description,
  };
  pets.push(newPet);
  res.status(201).json({ pet: newPet, msg: "Pet added successfully" });
};

module.exports = { getAllPets, getFilteredPets, addPet };
