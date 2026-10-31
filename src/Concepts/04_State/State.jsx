import { useState } from "react";
function State() {
  const [count, fn] = useState(0);
  function incriment() {
    fn(count + 1);
  }
  return (
    <div>
      <button onClick={incriment}>icre</button>
      <p>{count}</p>
    </div>
  );
}
export default State;
