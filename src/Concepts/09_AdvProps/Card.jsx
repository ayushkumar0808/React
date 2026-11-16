import React from "react";

export const Card = ({ name, desc }) => {
  return (
    <div className="card">
      <h1>{name}</h1>
      <p>{desc}</p>
    </div>
  );
};
