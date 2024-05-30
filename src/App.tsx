import { AlcoCounter, Salary, TopMenu } from "./components";
import { useState } from "react";

function App() {
  const [switchCalc, setSwitchCalc] = useState(true);
  const [theme, setTheme] = useState("white-theme");

  return (
    <div className={`app app--${theme}`}>
      <div className='app__top-menu'>
        <TopMenu
          setSwitchCalc={setSwitchCalc}
          setTheme={setTheme}
          theme={theme}
        />
      </div>
      {switchCalc ? <AlcoCounter /> : <Salary />}
    </div>
  );
}
export default App;

//TODO: add menu with "select lang" and "choose theme";
