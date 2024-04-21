import { useState } from "react";
import { Button } from "@mui/material";
import { alcoActions } from "../../../../../store/reducer/alcoReducer";
import {
  useAppSelector,
  useAppDispatch,
} from "../../../../../store/hooks/redux";
import { ALCO_CONTENT } from "../../../../../constants/alcoConstants";
import { InputLiquid } from "../Inputs";

export const InputLiquidPanel = () => {
  const [volumeDrank, setVolumeDrank] = useState("500");
  const [percent, setPercent] = useState("5");

  const { calculating } = alcoActions;
  const { currentLang } = useAppSelector(
    (state) => state.appReducer
  );
  const dispatch = useAppDispatch();

  const handleCalculating = () =>
    dispatch(calculating([volumeDrank, percent]));

  return (
    <div className='control-panel__inputs-panel control-panel__inputs-panel--direction-column'>
      <InputLiquid
        val={volumeDrank}
        step={100}
        setVal={setVolumeDrank}
        label={ALCO_CONTENT[currentLang].lblVolume}
      />

      <InputLiquid
        val={percent}
        step={1}
        setVal={setPercent}
        label={ALCO_CONTENT[currentLang].lblPercent}
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
