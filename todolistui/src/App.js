import { addToDoList } from "./redux/action";
import { useDispatch } from "react-redux";
import "./App.css";

//import component
import Header from "./components/Header.js";
import Main from "./components/Main";

function App() {
  return (
    <>
      <div className="App">
        <Header></Header>
        <Main></Main>
      </div>
    </>
  );
}

export default App;
