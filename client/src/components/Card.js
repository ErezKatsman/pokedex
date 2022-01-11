import React from "react";

export default function Card({
  pokemon,
  getTypeList,
  collection,
  addOrDelete,
}) {
  const { name, height, weight, sprites, types, id } = pokemon;

  const addOrRelease = () => {
    if (collection.find((poke) => poke.id === id)) return "Release";
    else return "Add";
  };

  if (Object.keys(pokemon).length === 0 && pokemon.constructor === Object)
    return <div className="poke-card"></div>;

  return (
    <div className="poke-card">
      <span>{name}</span>
      <span>{height * 10} cm</span>
      <span>{weight / 10} kg</span>
      <div className="types__card">
        {types.map((t, i) => {
          return (
            <span className="type-label" key={i} onClick={getTypeList}>
              {t.type.name}
            </span>
          );
        })}
      </div>

      <div className="image-wrapper">
        <img src={sprites.front_default} className="image" alt="front" />
        <img src={sprites.back_default} className="image-hover" alt="back" />
      </div>
      <span
        onClick={async (e) => await addOrDelete(e.target.innerText, pokemon)}
      >
        {addOrRelease()}
      </span>
    </div>
  );
}
