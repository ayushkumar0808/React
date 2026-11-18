import React from "react";

export const Header = (props) => {
  return (
    <div className="bg-red-500">
      Header
      <p>{props.data}</p>
    </div>
  );
};
