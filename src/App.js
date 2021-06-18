import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Decrement, Increment } from "./action";

const App = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>App component</h1>
      <h1>{state}</h1>
      <button onClick={() => dispatch(Increment())}>Increment</button>
      <button onClick={() => dispatch(Decrement())}>Decrement</button>
    </div>
  );
};

export default App;
