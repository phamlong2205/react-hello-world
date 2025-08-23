import React from "react";

function Button({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600 active:bg-green-700 transition"
    >
      {children}
    </button>
  );
}

export default Button;
