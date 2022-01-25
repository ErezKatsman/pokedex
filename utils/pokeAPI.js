const { default: axios } = require("axios");
const POKEAPI_BASE_URL = "https://pokeapi.co/api/v2";

const getDeatailsByName = async (nameE) => {
  const { data } = await axios.get(`${POKEAPI_BASE_URL}/pokemon/${nameE}`);
  const { height, weight, id, types, name } = data;
  const sprites = {
    back_default: data.sprites.back_default,
    front_default: data.sprites.front_default,
  };
  return { name, height, weight, id, sprites, types };
};

const getPokemonsByType = async (name) => {
  const { data } = await axios.get(`${POKEAPI_BASE_URL}/type/${name}`);
  return data.pokemon;
};

module.exports = { getDeatailsByName, getPokemonsByType };
