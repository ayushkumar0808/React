import React from "react";

export const Card = ({ tittle, description }) => {
  return (
    <div className="card">
      <h3>{tittle}</h3>
      <p>{description}</p>
    </div>
  );
};
