const mongoose = require("mongoose");

const pokemonSchema = new mongoose.Schema({
  name: { type: String, required: true },
  height: { type: Number, required: true },
  weight: { type: Number, required: true },
  id: { type: Number, required: true },
  back_default: { type: String, required: true },
  front_default: { type: String, required: true },
  types: { type: Array },
});

module.exports = mongoose.model("Pokemon", pokemonSchema);
