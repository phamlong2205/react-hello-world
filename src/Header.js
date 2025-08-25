import React from "react";
import { useSelector } from "react-redux";
import { selectCounter } from "./counterSlice";

function Header() {
  const count = useSelector(selectCounter);
  return <div className="p-2 bg-blue-100">Current count: {count}</div>;
}

export default Header;
