import { Card } from "./Card";
import { List } from "./List";

export default function AdvProps() {
  const obj = { name: "Ayush", age: 21 };
  return (
    <div className="flex ">
      {/* <Card name="Ayush" desc="softwere developer" age={21} />
      <Card name="Piyush" desc="softwere developer" />
      <Card name="Piyush" desc="softwere developer" /> */}
      {/* <List item={["Ayush", "piyush", "atul"]} /> */}

      {/* <Card data={obj} /> */}
    </div>
  );
}
