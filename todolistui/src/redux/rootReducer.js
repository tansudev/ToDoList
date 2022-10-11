import { combineReducers } from "redux";
import { todoListReducer } from "./reducer";
import { getByIdReducer } from "./reducerById";

export default combineReducers({
  todoListReducer,
  getByIdReducer,
});
