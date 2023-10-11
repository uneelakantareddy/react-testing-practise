import React, { useState, useMemo } from "react";
import { useSelector } from "react-redux";

const UseMemoHook = () => {
  const [number, setNumber] = useState(0);
  const [textvalue, setTextvalue] = useState("");

  const data = useSelector(
    (state) => state.AddToItemCartReducer?.addtoItemValue
  );

  console.log(data, "data");
  const factorialval = useMemo(() => {
    console.log("hello");
    let result = 1;
    for (let i = 1; i <= number; i++) {
      result *= i;
    }
    return result;
  }, [number]);
  return (
    <>
      <div>UseMemoHook</div>
      <input
        onChange={(e) => {
          let inputNumber = e.target.value;
          setNumber(parseInt(inputNumber));
        }}
        type="number"
        placeholder="enter fact number"
      />

      <h1>{factorialval}</h1>

      <input
        onChange={(e) => {
          setTextvalue(e.target.value);
        }}
        value={textvalue}
        type="text"
        placeholder="enter text"
      />
    </>
  );
};

export default UseMemoHook;
