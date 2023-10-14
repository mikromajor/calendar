import { AlcoCalendar, Salary } from "./components";
import { lazy, Suspense } from "react";
import { Route } from "react-router-dom";

function App() {
  return (
    <>
      <AlcoCalendar />
      <Salary />
    </>
  );
}
export default App;
