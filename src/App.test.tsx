import { Provider } from "react-redux";
import App from "./App";
import store from "./store";
import "./index.scss";
import { render, screen } from "@testing-library/react";

test("renders learn react link", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const linkElement = screen.getByText(/Potoczny miesiąc/i);
  expect(linkElement).toBeInTheDocument();
});
