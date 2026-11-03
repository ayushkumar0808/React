import React, { useState } from "react";

export const Card = ({ tittle, description }) => {
  let [count, setCount] = useState(0);
  return (
    <div className="card">
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>increment</button>
      <h3>{tittle}</h3>
      <p>{description}</p>
    </div>
  );
};
