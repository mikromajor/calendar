import {
  AlcoCounter,
  Salary,
  SelectLanguage,
} from "./components";
import { useState } from "react";
import { Button } from "@mui/material";
import { APP_CONTENT } from "./constants/appConstants";
import { useAppSelector } from "./store/hooks/redux";

function App() {
  const [showCalc, setShowCalc] = useState(true);

  const { currentLang } = useAppSelector(
    (state) => state.appReducer
  );
  let theme = "white-theme";
  return (
    <div className={`app app--${theme}`}>
      {showCalc ? <AlcoCounter /> : <Salary />}
      <div className={`app__menu app__menu--${theme}`}>
        <Button
          variant='contained'
          onClick={() => setShowCalc((s) => !s)}
        >
          {APP_CONTENT[currentLang].btnChangeCalc}
        </Button>
        <SelectLanguage />
      </div>
    </div>
  );
}
export default App;

//TODO: add menu with "select lang" and "choose theme";
