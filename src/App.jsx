import React from "react";
import { increment, decrement } from "./redux/numberSlice";
import { useSelector, useDispatch } from "react-redux";

const App = () => {
  const number = useSelector((state) => state.value);
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };
  return (
    <div>
      <h1>LightHall Number Increment</h1>
      <button onClick={handleDecrement}>-</button>
      <span>{number}</span>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
};

export default App;
