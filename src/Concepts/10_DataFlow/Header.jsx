import React from "react";

export const Header = (props) => {
  function fn() {
    props.func("hello from header");
  }

  return (
    <div onClick={fn} className="bg-red-500">
      Header
      <p>{props.data}</p>
    </div>
  );
};
