import React, { useState, useEffect } from "react";

function UseEffectDemo() {
  const [data, setData] = useState(null);

  // Logs a message when component mounts
  useEffect(() => {
    console.log("Component mounted");

    // Cleanup function when component unmounts
    return () => {
      console.log("Component unmounted");
    };
  }, []); // Empty dependency array → runs once on mount and cleanup on unmount

  const fetchData = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="text-center mt-10 p-6 bg-gray-100 rounded shadow-md">
      <h1 className="text-2xl font-semibold mb-4">useEffect Demo</h1>
      <button
        onClick={fetchData}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 transition"
      >
        Fetch Data
      </button>

      {data && (
        <div className="mt-4 text-left max-w-sm mx-auto border p-2 rounded bg-white">
          <p>ID: {data.id}</p>
          <p>Title: {data.title}</p>
          <p>Completed: {data.completed.toString()}</p>
        </div>
      )}
    </div>
  );
}

export default UseEffectDemo;
