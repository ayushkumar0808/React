import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  // let count = 0;
  // function inc() {
  //   count++;
  //   console.log(count);
  //   document.querySelector("h1").innerText = count;
  // }

  function inc() {
    setCount(count + 1);
    // setCount((prev) => {
    //   return prev + 1;
    // });
    console.log(count);
  }

  return (
    <>
      <h1>{count}</h1>
      <button onClick={inc}>Incriment</button>
    </>
  );
}

export default App;
