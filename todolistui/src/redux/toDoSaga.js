import { takeEvery, put } from "redux-saga/effects";
import {
  TODO_LIST,
  TODO_LIST_SAGA,
  ADD_TO_LIST_SAGA,
  ADD_TO_LIST,
  REMOVE_FROM_LIST,
  REMOVE_FROM_LIST_SAGA,
} from "./constant";

//get all data
function* getTodoList() {
  let data = yield fetch("http://localhost:5000/todos");
  data = yield data.json();
  console.warn("action is called Todo List", data);
  yield put({ type: TODO_LIST_SAGA, data });
}

//add new data
function* addTodoList(newTodo) {
  console.warn("action is called Todo List", newTodo.data);
  let adddata = newTodo.data;
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(adddata),
  };

  let result = yield fetch("http://localhost:5000/todos", requestOptions);
  console.warn("result", result);
  let data = yield result.json();

  yield put({ type: ADD_TO_LIST_SAGA, data });
}

//delete selected data
function* deleteTodoList(todo) {
  let url = "http://localhost:5000/todos/delete/" + todo.data;
  const requestOptions = {
    method: "DELETE",
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  };

  let result = yield fetch(url, requestOptions);
  console.warn("result", result);
  let data = yield result.json();

  yield put({ type: REMOVE_FROM_LIST_SAGA, data });
}

function* toDoSaga() {
  yield takeEvery(TODO_LIST, getTodoList);
  yield takeEvery(ADD_TO_LIST, addTodoList);
  yield takeEvery(REMOVE_FROM_LIST, deleteTodoList);
}

export default toDoSaga;
