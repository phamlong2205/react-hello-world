import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import FetchData from "./FetchData";

test("fetches and displays data", async () => {
  const mockApi = jest.fn().mockResolvedValue({ message: "Hello World" });

  render(<FetchData api={mockApi} />);

  // Verify loading state
  expect(screen.getByText(/Loading/i)).toBeInTheDocument();

  // Wait for data to appear
  await waitFor(() => {
    expect(screen.getByText(/Hello World/i)).toBeInTheDocument();
  });

  // Ensure the mock API function was called
  expect(mockApi).toHaveBeenCalledTimes(1);
});
