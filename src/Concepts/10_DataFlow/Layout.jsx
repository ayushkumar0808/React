import React from "react";
import { Hero } from "./Hero";
import { Other } from "./Other";

export const Layout = ({ data, func }) => {
  function fn() {
    func("hello from layout");
  }
  return (
    <div className="bg-amber-500 p-6">
      Layout
      <p>{data}</p>
      <Hero data={data} fn={func} />
      <Other data={data} />
    </div>
  );
};
