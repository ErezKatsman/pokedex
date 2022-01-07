import React, { useState } from "react";

export default function InputSection({ setPokemonName }) {
  const [inputStr, setInputStr] = useState("");
  return (
    <div className="search-container">
      <input
        value={inputStr}
        onChange={(e) => setInputStr(e.target.value)}
        className="search-input"
        placeholder="Look for a pokemon"
      ></input>
      <button
        className="search-button"
        onClick={() => setPokemonName(inputStr)}
      >
        Search
      </button>
    </div>
  );
}
