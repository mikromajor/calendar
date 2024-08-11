import { useState } from "react";
import { Button } from "@mui/material";
import { addNewDoseToDB } from "../../../../../store/reducer/http/alcoActions";
import {
  useAppSelector,
  useAppDispatch,
} from "../../../../../store/hooks/redux";
import { setDecimal } from "../../../../../store/reducer/alcoHandlers";
import { ALCO_CONTENT } from "../../../../../constants/alcoConstants";
import { InputLiquid } from "../Inputs/InputLiquid";

export const InputLiquidPanel = () => {
  const [volumeDrank, setVolumeDrank] = useState("500");
  const [percent, setPercent] = useState("5");
  const { currentLang, currentTheme } = useAppSelector(
    (state) => state.appReducer
  );
  const { currentDate } = useAppSelector(
    (state) => state.alcoReducer
  );
  const dispatch = useAppDispatch();

  const handleCalculating = () => {
    if (volumeDrank && percent) {
      const vodka = setDecimal(
        (Number(volumeDrank) * Number(percent) * 2.5) / 100,
        0
      );
      dispatch(
        addNewDoseToDB({
          additionVodka: vodka + "",
          ...currentDate,
        })
      );
    }
  };
  //TODO add message from server & progress,
  return (
    <div className='control-panel__inputs-panel control-panel__inputs-panel--direction-column'>
      <InputLiquid
        role='volume'
        val={volumeDrank}
        step={100}
        setVal={setVolumeDrank}
      />

      <InputLiquid
        role='percent'
        val={percent}
        step={1}
        setVal={setPercent}
      />
      <div className='control-panel__add-btn'>
        <Button
          id='btnAdd'
          variant='contained'
          onClick={handleCalculating}
        >
          {ALCO_CONTENT[currentLang].btnAdd}
        </Button>
      </div>
    </div>
  );
};
