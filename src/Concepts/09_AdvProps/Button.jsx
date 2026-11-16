import React from "react";

export const Button = ({ children, fn }) => {
  return <button onClick={fn}>{children}</button>;
};
