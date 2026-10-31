import Navbar from "./Navbar";

export default function Props() {
  return (
    <div>
      <Navbar tittle="Hello" link="google.com" num={5} />
      <Navbar tittle="Goal" link="alpha.com" num={4} />
      <Navbar link="hehehe.com" num={2} />
    </div>
  );
}
