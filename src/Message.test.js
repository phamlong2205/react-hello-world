import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Message from "./Message";

test("renders the initial message", () => {
  render(<Message />);
  expect(screen.getByText(/Hello! You clicked 0 times./i)).toBeInTheDocument();
});

test("increments count on button click", () => {
  render(<Message />);
  
  const button = screen.getByText(/Click Me/i);
  
  fireEvent.click(button);
  fireEvent.click(button);

  expect(screen.getByText(/Hello! You clicked 2 times./i)).toBeInTheDocument();
});
