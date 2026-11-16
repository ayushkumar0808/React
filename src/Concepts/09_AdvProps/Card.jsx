import React from "react";

export const Card = ({ data }) => {
  let { name, age } = data;
  return (
    <div className="card">
      <h1>{name}</h1>
      {/* <p>{desc}</p> */}
      <p>{age}</p>
    </div>
  );
};
