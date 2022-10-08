import { ADD_TO_CART } from "./constant";

export const addToDoList = (data) => {
  console.warn("action is called", data);
  return {
    type: ADD_TO_CART,
    data,
  };
};
