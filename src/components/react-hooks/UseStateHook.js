import React, { useState, useContext } from "react";
import { NameContext } from "./UseContextHook";

const UseStateHook = () => {
  const { name } = useContext(NameContext);

  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{name}</h1>

      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        update count
      </button>
      <h1>{count}</h1>
    </div>
  );
};

export default UseStateHook;
