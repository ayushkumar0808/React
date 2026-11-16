import React from "react";

export const Button = ({ tittle, fun }) => {
  return <button onClick={fun}>{tittle}</button>;
};
