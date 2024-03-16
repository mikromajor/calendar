import { AlcoCounter, Salary } from "./components";
import { useState } from "react";
import { Button } from "@mui/material";
import { APP_CONTENT } from "./constants/appConstants";
import { useAppSelector } from "./store/hooks/redux";
import { SelectLanguage } from "./ui/Select/SelectLanguage";

function App() {
  const [showCalc, setShowCalc] = useState(true);

  const { currentLang } = useAppSelector(
    (state) => state.appReducer
  );
  return (
    <>
      {showCalc ? <AlcoCounter /> : <Salary />}

      <Button
        variant='contained'
        onClick={() => setShowCalc((s) => !s)}
      >
        {APP_CONTENT[currentLang].btnChangeCalc}
      </Button>
      <SelectLanguage />
    </>
  );
}
export default App;

//TODO:  menu with "select lang" and "choose theme";
