const { default: axios } = require("axios");
const POKEAPI_BASE_URL = "https://pokeapi.co/api/v2";

const getDeatailsByName = async (name) => {
  const data = await axios.get(`${POKEAPI_BASE_URL}/pokemon/${name}`);
  const { height, weight, id, types } = data.data;
  const sprites = {
    back_default: data.data.sprites.back_default,
    front_default: data.data.sprites.front_default,
  };
  return { height, weight, id, sprites, types };
};

module.exports = getDeatailsByName;
