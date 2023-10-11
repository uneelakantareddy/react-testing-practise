import React, { useReducer } from "react";

const UseReducerHook = (props) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return { count: state.count + 1 };
      case "DECREMENT":
        return { count: state.count - 1 };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{state.count}</p>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
        }}
      >
        Increment
      </button>
      <div>
        <button
          onClick={() => {
            dispatch({ type: "DECREMENT" });
          }}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default UseReducerHook;
