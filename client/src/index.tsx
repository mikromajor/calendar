import React, { createContext } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import UserStore from "./mobxStore/UserStore";
import AppStore from "./mobxStore/AppStore";

const state = {
  user: new UserStore(),
  app: new AppStore(),
};
type State = typeof state;

export const Context = createContext<null | State>(null);

ReactDOM.render(
  <Context.Provider value={state}>
    <App />
  </Context.Provider>,
  document.getElementById("root")
);

// const MONTHS = {
//   jan: { days: 31, workHours: 176 },
//   feb: { days: 28, workHours: 152 },
// };
// interface M {
//   day: number;
//   workHours: number;
// }

// type Auto<O extends object, V> = {
//   [keys in keyof O]: V;
// };
// type MonthsType = typeof MONTHS;
// type Months = Auto<MonthsType, M>;
// type MonthsNames = keyof Months;

// function getWorkOurs(
//   monthName: MonthsNames,
//   yearData: MonthsType
// ) {
//   return yearData[monthName].workHours;
// }

// const workHours = getWorkOurs("jan", MONTHS);
//MonthsType =
// {
//     jan: M;
//     feb: M;
// }
