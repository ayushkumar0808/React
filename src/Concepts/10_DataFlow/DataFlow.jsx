import { Header } from "./Header";
import { Footer } from "./Footer";
import { Layout } from "./Layout";
import { useState } from "react";

export const DataFlow = () => {
  const [data, setDAta] = useState("hello from App.jsx");
  function recive(data) {
    setDAta(data);
  }
  return (
    <div>
      App
      <Header data={data} func={recive} />
      <Layout data={data} />
      <Footer data={data} />
    </div>
  );
};
