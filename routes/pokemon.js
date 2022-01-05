const { getDeatailsByName } = require("../utils/pokeAPI");

const { Router } = require("express");

const pokemon = Router();

pokemon.get("/:name", async (req, res) => {
  const { name } = req.params;
  try {
    const data = await getDeatailsByName(name);
    res.json({ data, success: true });
  } catch (err) {
    console.log(`Error occurred: ${err.message}`);
    res.status(404).json({
      error: err.message,
      data: "Pokemon not found",
      success: false,
    });
  }
});

module.exports = pokemon;
