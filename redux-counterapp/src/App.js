import "./App.css";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "./action/index";

function App() {
  const dispatch = useDispatch();
  const myState = useSelector((state) => state.changeTheNumber);
  return (
    <div className="App">
      <h1>Counter</h1>
      <button title="decrement" onClick={() => dispatch(decNumber(1))}>
        -
      </button>
      <input type="text" value={myState} />
      {console.log(myState)}
      <button title="Increment" onClick={() => dispatch(incNumber(1))}>
        +
      </button>
    </div>
  );
}

export default App;
