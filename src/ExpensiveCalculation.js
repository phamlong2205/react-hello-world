import React, { useState, useMemo } from "react";

function ExpensiveCalculation() {
  const [count, setCount] = useState(0);

  // Large array of numbers
  const numbers = Array.from({ length: 1000000 }, (_, i) => i + 1);

  // Expensive sum calculation
  const expensiveSum = (nums) => {
    console.log("Running expensive calculation...");
    return nums.reduce((acc, num) => acc + num, 0);
  };

  // useMemo prevents unnecessary re-calculation unless numbers change
  const sum = useMemo(() => expensiveSum(numbers), [numbers]);

  return (
    <div className="text-center mt-10 p-6 bg-gray-100 rounded shadow-md">
      <h1 className="text-2xl font-semibold mb-4">useMemo Demo</h1>
      <p className="mb-4">Sum of 1 to 1,000,000: {sum}</p>
      <button
        onClick={() => setCount(count + 1)}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 transition"
      >
        Re-render Component ({count})
      </button>
    </div>
  );
}

export default ExpensiveCalculation;
