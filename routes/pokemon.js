const getDeatailsByName = require("../utils/pokeAPI");

const { Router } = require("express");

const pokemon = Router();

pokemon.get("/:name", async (req, res) => {
  const { name } = req.params;
  const data = await getDeatailsByName(name);
  console.log(data);
  res.json(data);
});

module.exports = pokemon;
