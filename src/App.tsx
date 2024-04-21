import { AlcoCounter, Salary, TopMenu } from "./components";
import { useState } from "react";

function App() {
  const [switchCalc, setSwitchCalc] = useState(true);

  let theme = "white-theme";
  return (
    <div className={`app app--${theme}`}>
      <div className='app__top-menu'>
        <TopMenu
          switchCalc={switchCalc}
          setSwitchCalc={setSwitchCalc}
        />
      </div>
      {switchCalc ? <AlcoCounter /> : <Salary />}
    </div>
  );
}
export default App;

//TODO: add menu with "select lang" and "choose theme";
