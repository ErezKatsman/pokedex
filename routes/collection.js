const { Router } = require("express");
const Pokemon = require("../models/pokemonModel");

const collection = Router();

collection.get("/", async (req, res) => {
  try {
    return res.json(await Pokemon.find());
  } catch (e) {
    return res.status(500).json({ error: `${e}` });
  }
});

collection.post("/catch", async (req, res) => {
  const { body } = req;

  const pokemonToAdd = Pokemon({
    name: body.name,
    height: body.height,
    weight: body.weight,
    id: body.id,
    back_default: body.sprites.back_default,
    front_default: body.sprites.front_default,
    types: body.types,
  });

  try {
    await pokemonToAdd.save();
    return res.status(200).json({ message: "Added Succesfully" });
  } catch (e) {
    return res.status(500).json({ error: `${e}` });
  }
});

collection.delete("/release/:id", async (req, res) => {
  const id = Number(req.params.id);
  try {
    await Pokemon.deleteOne({ id: id });
    res.json({ message: "deleted succesfully" });
  } catch (e) {
    return res.status(500).json({ error: `${e}` });
  }
});

module.exports = collection;
