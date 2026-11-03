import React from "react";
import { Card } from "./Card";
// function DemoComp() {
//   return (
//     <div>
//       <h1>hello</h1>
//       <p>world</p>
//     </div>
//   );
// }

const Components = () => {
  return (
    <>
      {/* function and component */}
      {/* <div>
        <DemoComp />
        {DemoComp()}
      </div> */}
      {/* Props */}
      <div className="flex">
        <Card tittle="First" description="kaise ho bc" />
        <Card tittle="Second" description="kaise ho bc" />
        <Card tittle="Third" description="kaise ho bc" />
        <Card tittle="Four" description="kaise ho bc" />
        <Card tittle="Five" description="kaise ho bc" />
        <Card tittle="Six" description="kaise ho bc cccc" />
      </div>
    </>
  );
};
export default Components;
