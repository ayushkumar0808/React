import React from "react";

export const List = ({ item }) => {
  return (
    <div>
      {item.map((item) => {
        return <h1>{item}</h1>;
      })}
    </div>
  );
};
