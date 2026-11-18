import React from "react";
import { Hero } from "./Hero";
import { Other } from "./Other";

export const Layout = () => {
  return (
    <div className="bg-amber-500 p-6">
      Layout
      <Hero />
      <Other />
    </div>
  );
};
