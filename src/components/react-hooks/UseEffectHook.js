import React, { useEffect, useState } from "react";
import axios from "axios";

const UseEffectHook = () => {
  const [todosData, setTodoData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const response = axios.get("https://jsonplaceholder.typicode.com/todos");
      const tododata = (await response).data;
      setTodoData(tododata);
    };
    fetchData();
  }, []);

  console.log(todosData);
  return (
    <div>
      UseEffectHook
      {todosData.map((item) => {
        return (
          <>
            <span>{item?.id}</span>
            <h3>{item?.title}</h3>
          </>
        );
      })}
    </div>
  );
};

export default UseEffectHook;
