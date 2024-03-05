import { AlcoCounter, Salary } from "./components";
import { useState } from "react";
import { Button } from "@mui/material";
import { APP_CONTENT } from "./constants/appConstants";
import { useAppSelector } from "./store/hooks/redux";

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
    </>
  );
}
export default App;
//TODO:  changeCalcButton - language can be change only in AlcoCounter
