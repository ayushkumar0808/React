import { useEffect, useState } from "react";

function App() {
  const [time, setTime] = useState(Date().toString());

  useEffect(() => {
    console.log("hello");
    setInterval(() => {
      setTime(Date().toString());
    }, 1000);
  }, []);

  return (
    <>
      <h1>Time:{time}</h1>
    </>
  );
}

export default App;
