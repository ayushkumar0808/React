import { Card } from "./Card";

export default function AdvProps() {
  return (
    <div className="flex ">
      <Card name="Ayush" desc="softwere developer" age={21} />
      <Card name="Piyush" desc="softwere developer" />
      <Card name="Piyush" desc="softwere developer" />
    </div>
  );
}
