import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import store from "./store";
import "./index.scss";

import { createRoot } from "react-dom/client";
const container = document.getElementById("app");
const root = createRoot(container!);
// createRoot(container!) if you use TypeScript
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
