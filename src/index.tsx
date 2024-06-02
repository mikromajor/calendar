import { Provider } from "react-redux";
import App from "./App";
import store from "./store";
import "./index.scss";
import { createRoot } from "react-dom/client";

const container = document.getElementById("app");
const root = createRoot(container!);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

const MONTHS = {
  jan: { days: 31, workHours: 176 },
  feb: { days: 28, workHours: 152 },
};
interface M {
  day: number;
  workHours: number;
}

type Auto<O extends object, V> = {
  [keys in keyof O]: V;
};
type MonthsType = typeof MONTHS;
type Months = Auto<MonthsType, M>;
type MonthsNames = keyof Months;

function getWorkOurs(
  monthName: MonthsNames,
  yearData: MonthsType
) {
  return yearData[monthName].workHours;
}

const workHours = getWorkOurs("jan", MONTHS);
//MonthsType =
// {
//     jan: M;
//     feb: M;
// }
