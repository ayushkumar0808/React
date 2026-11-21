// create a element------>

// const element = document.createElement("h1");
// element.textContent = "Hello Ayush";
// element.className = "first";
// element.id = "heading";
// element.style.backgroundColor = "yellow";
// element.style.color = "black";

// const element2 = document.createElement("h2");
// element2.textContent = "kyu bhai";
// element2.className = "first";
// element2.id = "heading1";
// element2.style.backgroundColor = "red";

// const root = document.querySelector("#root");
// root.append(element, element2);

// attribute = {
//   className: "first",
//   id: "heading",
//   style: {
//     backgroundColor: "yellow",
//     color: "balck",
//   },
// };

// element = {
//   tagName: "h1",

//   attributes: {
//     className: "first",
//     id: "heading",
//     style: {
//       backgroundColor: "yellow",
//       color: "balck",
//     },
//   },

//   textContent: "Hello Ayush",
// };

// constom React------------->

// const React = {
//   createElement: function (tag, attributes, children) {
//     const element = document.createElement(tag);

//     element.textContent = children;

//     for (let key in attributes) {
//       if (key == "style") {
//         Object.assign(element.style, attributes[key]);
//       } else {
//         element[key] = attributes[key];
//       }
//     }
//     return element;
//   },
// };

// const ReactDom = {
//   render: function (parent, child) {
//     parent.innerHTML = "";
//     parent.append(child);
//   },
// };

// const element = React.createElement(
//   "h1",
//   {
//     className: "first",
//     id: "heading",
//     style: { backgroundColor: "red", color: "black" },
//   },
//   "Hello ayush",
// );

// const element2 = React.createElement(
//   "h2",
//   {
//     className: "first",
//     id: "heading1",
//     style: { backgroundColor: "yellow", color: "black" },
//   },
//   "Kyu bhai",
// );

// const root = document.querySelector("#root");

// ReactDom.render(root, element);
// ReactDom.render(root, element2);

// original react--------------->

const element = React.createElement(
  "h1",
  {
    className: "first",
    id: "heading",
    style: { backgroundColor: "red", color: "black" },
  },
  "Hello ayush",
);

const element2 = React.createElement(
  "h2",
  {
    className: "first",
    id: "heading1",
    style: { backgroundColor: "yellow", color: "black" },
  },
  "Kyu bhai",
);

const root = document.querySelector("#root");

ReactDOM.render(element, root);
ReactDOM.render(element2, root);
