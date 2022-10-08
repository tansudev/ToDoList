import "./App.css";
import { addToDoList } from "./redux/action";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const todo = {
    toDo: "kjnlsdfsdg",
    finishDate: "2022-11-01T00:00:00.000Z",
    priority: "Low",
    status: "Pending",
    subDoTo: ["lmedve", "afverer"],
    date: "2022-10-08T18:53:57.872Z",
  };
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={() => dispatch(addToDoList(todo))}>add To Cart</button>
        <p>ToDO list Items</p>
        Learn React
      </header>
    </div>
  );
}

export default App;
