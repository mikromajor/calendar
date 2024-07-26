import React, { createContext } from "react";
import ReactDOM from "react-dom";
import App_mobx from "./App_mobx";
import UserStore from "./mobxStore/UserStore";
import AppStore from "./mobxStore/AppStore";

const state = {
  user: new UserStore(),
  app: new AppStore(),
};
type State = typeof state;

export const Context = createContext<null | State>(null);

// ReactDOM.render(
//   <Context.Provider value={state}>
//     <App_mobx />
//   </Context.Provider>,
//   document.getElementById("root")
// );
export const Temple = () => <App_mobx></App_mobx>;
