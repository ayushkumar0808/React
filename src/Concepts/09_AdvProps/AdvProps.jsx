import { Button } from "./Button";
import { Card } from "./Card";
import { List } from "./List";

export default function AdvProps() {
  const obj = { name: "Ayush", age: 21 };

  function fun() {
    console.log("clicl btn 1");
  }
  function fun2() {
    console.log("clicl btn 2");
  }

  return (
    <div className="flex ">
      {/* <Card name="Ayush" desc="softwere developer" age={21} />
      <Card name="Piyush" desc="softwere developer" />
      <Card name="Piyush" desc="softwere developer" /> */}

      {/* <List item={["Ayush", "piyush", "atul"]} /> */}

      {/* <Card data={obj} /> */}

      {/* <Button tittle="click me" fun={fun} />
      <Button tittle="click" fun={fun2} /> */}

      {/* <Card
        contant={
          <div>
            <h1>Ayush</h1>
            <p>21</p>
          </div>
        }
      />
      <Card
        contant={
          <div>
            <h1>Ayushi</h1>
            <p>21</p>
          </div>
        }
      /> */}

      {/* <Button fn={fun}>Click me</Button> */}
    </div>
  );
}
