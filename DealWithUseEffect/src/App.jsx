import React, { useEffect, useState } from "react";

const App = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  // const [num, setNum] = useState(0);
  // const [num2, setNum2] = useState(100);
  // const random = () => {
  //   console.log("Hello Guys");
  // };

  // random();

  // useEffect(() => {
  //   console.log("Hello My Guys!");
  // }, [num]);

  const changeA = () => {
    console.log("A is changing...");
  };

  const changeB = () => {
    console.log("B is changing...");
  };

  useEffect(() => {
    changeA();
    console.log("Print A");
  }, [a]);

  useEffect(() => {
    changeB();
    console.log("Print B");
  }, [b]);

  return (
    <>
      {/* <div>App</div>
      <h1>num = {num}</h1>
      <h2>nums = {num2}</h2>
      {/* <button onClick={() => setNum(num + 1)}>Click here!</button> */}
      {/* <button
        onMouseEnter={() => setNum(num + 1)}
        onMouseLeave={() => setNum2(num2 + 100)}
      >
        Hover
      </button> */}

      <h1>a = {a}</h1>
      <h1>b = {b}</h1>
      <button onClick={() => setA(a + 1)}>Change A</button>
      <button onClick={() => setB(b - 1)}>Change B</button>
    </>
  );
};

export default App;
