import "./App.css";
import JSX from "./Concepts/01_JavaScriptXML/XML";
import Component from "./Concepts/02_Component/Component";
import Props from "./Concepts/03_Props/Props";

// function App() {
//   const [count, fn] = useState(0);
//   function incriment() {
//     fn(count + 1);
//   }
//   return (
//     <div>
//       <button onClick={incriment}>icre</button>
//       <p>{count}</p>
//     </div>
//   );
// }

function App() {
  return (
    <>
      {/* <JSX /> */}
      {/* <Component />
      <Component /> */}
      <Props />
    </>
  );
}
export default App;
