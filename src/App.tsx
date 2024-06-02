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

//TODO: add menu with "select lang" and "choose theme";

// type Obj2 = {
//   [k:string]:number
// }
// type Obj1 = Record<string,number>// equivalent
