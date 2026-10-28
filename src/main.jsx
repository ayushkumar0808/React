import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

let id = document.querySelector("#root");

let root = createRoot(id);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
