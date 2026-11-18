import { Header } from "./Header";
import { Footer } from "./Footer";
import { Layout } from "./Layout";
import { useState } from "react";

export const DataFlow = () => {
  const [data, setDAta] = useState("hello from App.jsx");
  return (
    <div>
      App
      <Header data={data} />
      <Layout data={data} />
      <Footer data={data} />
    </div>
  );
};
