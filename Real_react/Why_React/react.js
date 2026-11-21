const element = document.createElement("h1");
element.textContent = "Hello Ayush";
element.className = "first";
element.id = "heading";
element.style.backgroundColor = "yellow";

const root = document.querySelector("#root");
root.append(element);
