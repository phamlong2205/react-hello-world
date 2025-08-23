import React, { useState, useCallback } from "react";

// Child component
const Child = React.memo(({ onClick }) => {
  console.log("Child rendered");
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 active:bg-green-700 transition"
    >
      Child Button
    </button>
  );
});

// Parent component
function CallbackDemo() {
  const [count, setCount] = useState(0);

  // Without useCallback, this function reference changes on every render
  // With useCallback, the reference is memoized unless dependencies change
  const handleClick = useCallback(() => {
    console.log("Button clicked!");
  }, []);

  return (
    <div className="text-center mt-10 p-6 bg-gray-100 rounded shadow-md">
      <h1 className="text-2xl font-semibold mb-4">useCallback Demo</h1>
      <p className="mb-4">Parent count: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 transition mb-4"
      >
        Increase Count
      </button>
      <br />
      <Child onClick={handleClick} />
    </div>
  );
}

export default CallbackDemo;
