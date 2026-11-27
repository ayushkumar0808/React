import { createRoot } from "react-dom/client";

let id = document.querySelector("#root");

let root = createRoot(id);

root.render(<App />);
