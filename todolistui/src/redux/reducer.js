import { ADD_TO_CART } from "./constant";

export const todoList = (data = [], action) => {
  if (action.type === ADD_TO_CART) {
    console.warn("ADD_TO_CART called", action);
  } else {
    return data;
  }
  return 100;
};
