import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "./store";  // 👈 adjust this path!
import App from "./App";

test("renders counter component", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(screen.getByText(/counter/i)).toBeInTheDocument();
});
