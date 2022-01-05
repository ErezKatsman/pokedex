const { Router } = require("express");
const { getPokemonsByType, getDeatailsByName } = require("../utils/pokeAPI");

const type = Router();

type.get("/:name", async (req, res) => {
  const { name } = req.params;
  try {
    const data = await getPokemonsByType(name);
    const pokemons = await Promise.all(
      data.map(async (pokemon) => {
        const photo = await (
          await getDeatailsByName(pokemon.pokemon.name)
        ).sprites.front_default;
        return photo;
      })
    );
    res.json(pokemons);
  } catch (err) {
    console.log(`Error occurred: ${err.message}`);
    res.status(404).json({
      error: err.message,
      data: "Type not found",
      success: false,
    });
  }
});

module.exports = type;
