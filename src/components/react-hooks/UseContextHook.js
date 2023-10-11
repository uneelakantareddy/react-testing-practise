import React, { createContext, useState } from "react";
import UseStateHook from "./UseStateHook";

export const NameContext = createContext("");

const UseContextHook = () => {
  const [name, setName] = useState("ReactJs");
  return (
    <NameContext.Provider value={{ name }}>
      <UseStateHook />
    </NameContext.Provider>
  );
};

export default UseContextHook;
