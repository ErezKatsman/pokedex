import React from "react";

export default function Header({ typeList, setTypeList }) {
  return (
    <div className="header-section">
      <h1 className="main_title">Pokedex</h1>
      {typeList.length !== 0 && (
        <span className="show-collect">
          <span className="clickable" onClick={() => setTypeList([])}>
            Click here
          </span>{" "}
          to show your collection
        </span>
      )}
    </div>
  );
}
