import { AlcoCounter, Salary } from "./components";
import { useState } from "react";
import { Button } from "@mui/material";
import { ALCO_CONTENT } from "./constants/alcoConstants";
import { useAppSelector } from "./store/hooks/redux";

function App() {
  const [showCalc, setShowCalc] = useState(true);

  const { currentLang } = useAppSelector(
    (state) => state.alcoReducer
  );
  return (
    <>
      {showCalc ? <AlcoCounter /> : <Salary />}

      <Button
        variant='contained'
        onClick={() => setShowCalc((s) => !s)}
      >
        {ALCO_CONTENT[currentLang].btnChangeCalc}
      </Button>
    </>
  );
}
export default App;
//TODO:  changeCalcButton - language can be change only in AlcoCounter
