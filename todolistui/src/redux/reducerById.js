import { GET_BY_ID_SAGA } from "./constant";

export const getByIdReducer = (data = [], action) => {
  switch (action.type) {
    case GET_BY_ID_SAGA:
      console.warn("GET_BY_ID_SAGA called", action);
      return [action.data];
    default:
      return data;
  }
};
