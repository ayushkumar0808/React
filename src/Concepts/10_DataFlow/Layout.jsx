import React from "react";
import { Hero } from "./Hero";
import { Other } from "./Other";

export const Layout = ({ data }) => {
  return (
    <div className="bg-amber-500 p-6">
      Layout
      <p>{data}</p>
      <Hero data={data} />
      <Other data={data} />
    </div>
  );
};
