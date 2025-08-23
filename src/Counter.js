import React, { useState } from "react";
import Button from "./Button";

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount(count + 1);

  return (
    <div className="text-center mt-10 p-6 bg-gray-100 rounded shadow-md">
      <h1 className="text-3xl font-semibold mb-4 text-gray-800">Count: {count}</h1>    
        <Button onClick={handleIncrement}>Increment</Button>
    </div>
  );
}

export default Counter;
