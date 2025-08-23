import React from "react";

function HelloWorld({ name }) {
  return (
    <div className="text-center mt-10 text-3xl font-semibold">
      Hello, {name}!
    </div>
  );
}

export default HelloWorld;
