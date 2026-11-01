import React from "react";
import { Header } from "./Header";

const AdvJsx = () => {
  //   let name = "Ayush";

  //   function greet() {
  //     return <p>hi ayush</p>;
  //   }

  //   let age = 17;

  //   let isOutOfStock = false;

  //   let arr = ["Ayush", "Piyush", "Atul"];

  //   let alpha = <h1>hi im ayush</h1>;

  //   let t1 = <h1>alhpha</h1>;
  //   let t2 = <h1>beta</h1>;

  return (
    <>
      <div>
        {/* veriables */}
        {/* <h1>hi, how are you {name}</h1> */}
        {/* function call */}
        {/* {greet()} */}
        {/* ternary expressions */}
        {/* {age >= 18 ? "you can go" : "you can not go"} */}
      </div>
      <div>
        {/* inline style */}
        {/* <h1 style={{ color: "red", backgroundColor: "yellow" }}>
          hi i m ayush kumar
        </h1>
        <h1 style={{ color: "red", "background-color": "yellow" }}>
          hi i m ayush kumar
        </h1> */}
      </div>
      <div>
        {/* <p>{false ? "go" : "not go"}</p> */}
        {/* short-circuit */}
        {/* {isOutOfStock && <p>out of stock</p>} */}
      </div>
      <div>
        {/* {arr.map((item) => {
          return <h1 key={item}>{item}</h1>;
        })} */}
      </div>
      <div>
        {/* store in veriable */}
        {/* {alpha} */}
        {/* pass as props */}
        {/* <Header item={t1} />
        <Header item={t2} /> */}
      </div>
    </>
  );
};

export default AdvJsx;
