import React from "react";
import ReactDOM from "react-dom/client";

const ele = React.createElement("h1", null, "hello world");

ReactDOM.createRoot(document.getElementById("root")).render(ele);
