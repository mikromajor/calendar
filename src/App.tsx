import { AlcoCounter, Salary, TopMenu } from "./components";
import { useState } from "react";
import { useAppSelector } from "./store/hooks/redux";

function App() {
  const [switchCalc, setSwitchCalc] = useState(true);
  const { currentTheme } = useAppSelector(
    (state) => state.appReducer
  );

  return (
    <div className={`app app--${currentTheme}`}>
      <TopMenu setSwitchCalc={setSwitchCalc} />
      {switchCalc ? <AlcoCounter /> : <Salary />}
    </div>
  );
}
export default App;
