import { takeEvery, put } from "redux-saga/effects";
import {
  TODO_LIST,
  TODO_LIST_SAGA,
  ADD_TO_LIST_SAGA,
  ADD_TO_LIST,
  REMOVE_FROM_LIST,
  REMOVE_FROM_LIST_SAGA,
  GET_BY_ID,
  GET_BY_ID_SAGA,
  UPDATE_TO_LIST,
  UPDATE_TO_LIST_SAGA,
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

function* getByIdTodoList(todo) {
  let url = "http://localhost:5000/todos/getById/" + todo.data;
  const requestOptions = {
    method: "GET",
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  };

  let result = yield fetch(url, requestOptions);
  console.warn("result", result);
  let data = yield result.json();
  console.warn("result", data);
  yield put({ type: GET_BY_ID_SAGA, data });
}

function* UpdateTodoList(newTodo) {
  console.warn("action is called Todo List", newTodo.data);
  let adddata = newTodo.data;
  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(adddata),
  };

  let result = yield fetch(
    "http://localhost:5000/todos/update/" + newTodo.data._id,
    requestOptions
  );
  console.warn("result", result);
  let data = yield result.json();

  yield put({ type: UPDATE_TO_LIST_SAGA, data });
}

function* toDoSaga() {
  yield takeEvery(TODO_LIST, getTodoList);
  yield takeEvery(ADD_TO_LIST, addTodoList);
  yield takeEvery(REMOVE_FROM_LIST, deleteTodoList);
  yield takeEvery(GET_BY_ID, getByIdTodoList);
  yield takeEvery(UPDATE_TO_LIST, UpdateTodoList);
}

export default toDoSaga;
