import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, selectCounter } from "./counterSlice";

function Counter() {
  const count = useSelector(selectCounter);
  const dispatch = useDispatch();

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Counter: {count}</h1>
      <button
        onClick={() => dispatch(increment())}
        className="px-4 py-2 m-2 bg-green-500 text-white rounded"
      >
        Increment
      </button>
      <button
        onClick={() => dispatch(decrement())}
        className="px-4 py-2 m-2 bg-red-500 text-white rounded"
      >
        Decrement
      </button>
      <button
        onClick={() => dispatch(reset())}
        className="px-4 py-2 m-2 bg-gray-500 text-white rounded"
      >
        Reset
      </button>

      {/*Conditional message */}
      <p className="mt-4">
        {count > 5
          ? "🔥 The count is getting high!"
          : count < 0
          ? "⚠️ Count is negative!"
          : "🙂 Keep counting..."}
      </p>
    </div>
  );
}

export default Counter;
