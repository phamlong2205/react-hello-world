import React, { useState } from "react";

function ListForm() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAdd = () => {
    if (inputValue.trim() !== "") {
      setItems([...items, inputValue]);
      setInputValue("");
    }
  };

  return (
    <div className="text-center mt-10 p-6 bg-gray-100 rounded shadow-md">
      <h1 className="text-2xl font-semibold mb-4">Add Items to the List</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="px-4 py-2 border rounded mr-2"
        placeholder="Enter text"
      />
      <button
        onClick={handleAdd}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 transition"
      >
        Add
      </button>

      <ul className="mt-4 text-left max-w-sm mx-auto">
        {items.map((item, index) => (
          <li key={index} className="border-b py-1">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListForm;
