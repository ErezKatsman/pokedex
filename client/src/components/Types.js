import React from "react";

export default function Types({ typeList, setName }) {
  if (typeList.length === 0) return <div>empty type</div>;
  return (
    <div>
      {typeList.map((p, i) => (
        <img
          key={i}
          src={p.photo}
          onClick={() => {
            setName(p.name);
          }}
        />
      ))}
    </div>
  );
}
