import { Provider } from "react-redux";
import App from "../App";
import store from "../store";
import { render, screen } from "@testing-library/react";

test("renders learn react link", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(
    screen.getByTestId(/display/i)
  ).toBeInTheDocument();
  expect(
    screen.getByTestId(/controlPanel/i)
  ).toBeInTheDocument();

  const dodajButton = screen.getByRole("button", {
    name: "Dodaj",
  });
  expect(dodajButton).toBeTruthy();
});
