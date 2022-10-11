import {
  ADD_TO_LIST_SAGA,
  EMPTY_TODO_LIST,
  REMOVE_FROM_LIST_SAGA,
  TODO_LIST_SAGA,
  UPDATE_TO_LIST_SAGA,
} from "./constant";

export const todoListReducer = (data = [], action) => {
  switch (action.type) {
    case TODO_LIST_SAGA:
      // console.warn("TODO_LIST", action);
      return [...action.data];
    case ADD_TO_LIST_SAGA:
      // console.warn("ADD_TO_CART called", action);
      return [...data, action.data];
    case REMOVE_FROM_LIST_SAGA:
      return [...data];
    case UPDATE_TO_LIST_SAGA:
      return [...data];
    case EMPTY_TODO_LIST:
      console.warn("EMPTY_TODO_LIST called", action);
      data = [];
      return [...data];
    default:
      return data;
  }
};
