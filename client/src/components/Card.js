import React from "react";
import axios from "axios";

export default function Card({ pokemon }) {
  const { name, height, weight, sprites, types } = pokemon;
  if (Object.keys(pokemon).length === 0 && pokemon.constructor === Object)
    return <div>empty card</div>;

  function over(e) {
    e.currentTarget.src = sprites.back_default;
  }
  function out(e) {
    e.currentTarget.src = sprites.front_default;
  }

  return (
    <div className="poke-card">
      <span>{name}</span>
      <span>{height * 10} cm</span>
      <span>{weight / 10} kg</span>
      {types.map((t, i) => {
        console.log(pokemon.sprites.front_default);
        return <span key={i}>{t.type.name}</span>;
      })}

      {/* <img src={sprites.front_default} onMouseOver={over} onMouseOut={out} /> */}
      <div id="cf">
        <img class="bottom" src={sprites.front_default} />
        <img class="top" src={sprites.back_default} />
      </div>
    </div>
  );
}
