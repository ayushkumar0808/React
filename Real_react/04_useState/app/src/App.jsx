function App() {
  let count = 0;
  function inc() {
    count++;
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
