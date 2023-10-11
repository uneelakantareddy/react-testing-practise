import axios from "axios";
export const addToCart = () => {
  return async (dispatch) => {
    const response = axios.get("https://jsonplaceholder.typicode.com/todos/");
    const tododata = (await response).data;

    dispatch({
      type: "ADD_TO_ITEMCART",
      payload: tododata,
    });
  };
};
