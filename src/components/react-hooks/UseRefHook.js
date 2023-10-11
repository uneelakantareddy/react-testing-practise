import React, { useRef } from "react";
import { useSelector } from "react-redux";

const UseRefHook = () => {
  const inputRef = useRef(null);
  const handlebtnClick = () => {
    inputRef.current.focus();
  };

  const data = useSelector(
    (state) => state.AddToItemCartReducer.removedfromcart
  );
  return (
    <>
      <div>UseRefHook</div>

      <input ref={inputRef} type="text " placeholder="Enter text here" />
      <button onClick={handlebtnClick}>Focus me</button>
    </>
  );
};

export default UseRefHook;
