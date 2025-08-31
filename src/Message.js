import React, { useState } from "react";

function Message() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Hello! You clicked {count} times.</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
}

export default Message;
