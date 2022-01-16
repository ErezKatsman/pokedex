const mongoose = require("mongoose");

const pokemonSchema = new mongoose.Schema({
  name: { type: String, required: true },
  height: { type: Number, required: true },
  weight: { type: Number, required: true },
  id: { type: Number, required: true },
  sprites: {
    back_default: { type: String },
    front_default: { type: String, required: true },
  },
  types: { type: Array },
});

module.exports = mongoose.model("Pokemon", pokemonSchema);
