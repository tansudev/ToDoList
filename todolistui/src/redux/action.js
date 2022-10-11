import {
  ADD_TO_LIST,
  EMPTY_TODO_LIST,
  REMOVE_FROM_LIST,
  TODO_LIST,
  GET_BY_ID,
  UPDATE_TO_LIST,
} from "./constant";

export const todoListAction = () => {
  return {
    type: TODO_LIST,
  };
};

export const addToDoList = (data) => {
  return {
    type: ADD_TO_LIST,
    data: data,
  };
};

export const removeFromToDoList = (id) => {
  return {
    type: REMOVE_FROM_LIST,
    data: id,
  };
};

export const updateToDoList = (data) => {
  return {
    type: UPDATE_TO_LIST,
    data: data,
  };
};

export const getByIdFromToDoList = (id) => {
  return { type: GET_BY_ID, data: id };
};

export const emptyToDoList = (id) => {
  console.warn("action is delete all items");
  return {
    type: EMPTY_TODO_LIST,
    data: id,
  };
};
