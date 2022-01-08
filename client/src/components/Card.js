import React from "react";

export default function Card({ pokemon, getTypeList }) {
  const { name, height, weight, sprites, types } = pokemon;
  if (Object.keys(pokemon).length === 0 && pokemon.constructor === Object)
    return <div>empty card</div>;

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

      {/* <img
        className="figure"
        src={sprites.front_default}
        onMouseOver={(e) => (e.currentTarget.src = sprites.back_default)}
        onMouseOut={(e) => (e.currentTarget.src = sprites.front_default)}
        alt={"pokemon"}
      /> */}

      <div className="image-wrapper">
        <img src={sprites.front_default} className="image" alt="normal" />
        <img src={sprites.back_default} className="image-hover" alt="hover" />
      </div>
    </div>
  );
}
