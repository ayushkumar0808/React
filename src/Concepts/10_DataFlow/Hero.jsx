import React from "react";

export const Hero = ({ data, fn }) => {
  function hello() {
    fn("hello from hero");
  }
  return (
    <div onClick={hello} className="bg-amber-950">
      Hero
      <p>{data}</p>
    </div>
  );
};
