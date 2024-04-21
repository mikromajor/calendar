import { Button } from "@mui/material";
import { ALCO_CONTENT } from "../../../../constants/alcoConstants";
import { useState } from "react";
import { InputDatePanel } from "./InputsPanel/InputDatePanel";
import { InputLiquidPanel } from "./InputsPanel/InputLiquidPanel";
import { alcoActions } from "../../../../store/reducer/alcoReducer";
import {
  useAppSelector,
  useAppDispatch,
} from "../../../../store/hooks/redux";

type ControlPanelProps = {
  setShowAlcoCalendar: React.Dispatch<
    React.SetStateAction<boolean>
  >;
  showPanelInputDate: boolean;
};

export const ControlPanel = ({
  setShowAlcoCalendar,
  showPanelInputDate,
}: ControlPanelProps) => {
  const [volumeDrank, setVolumeDrank] = useState("500");
  const [percent, setPercent] = useState("5");

  const { calculating } = alcoActions;

  let theme = "white-theme";
  const { currentLang } = useAppSelector(
    (state) => state.appReducer
  );
  const dispatch = useAppDispatch();

  const handleCalculating = () =>
    dispatch(calculating([volumeDrank, percent]));

  return (
    <div
      className={`control-panel control-panel--${theme}`}
      data-testid='control-panel'
    >
      <h2
        className={`control-panel__header control-panel__header--${theme}`}
      >
        {ALCO_CONTENT[currentLang].controlPanelHeader}
      </h2>

      <div className='control-panel__inputs-container'>
        {!showPanelInputDate && <InputDatePanel />}

        <div className='control-panel__show-calendar-btn'>
          <Button
            id='btnShowAlcoCalendar'
            variant='contained'
            onClick={() =>
              setShowAlcoCalendar((show) => !show)
            }
          >
            {ALCO_CONTENT[currentLang].btnShowAlcoCalendar}
          </Button>
        </div>

        <InputLiquidPanel
          volumeDrank={volumeDrank}
          setVolumeDrank={setVolumeDrank}
          percent={percent}
          setPercent={setPercent}
        />
      </div>

      <div className='control-panel__add-btn'>
        <Button
          id='btnAdd'
          variant='contained'
          onClick={handleCalculating}
        >
          {ALCO_CONTENT[currentLang].btnAdd}
        </Button>
      </div>

      {/* <button onClick={(e) => dispatch(asyncAdder())}>
        +50 L in 1 sec
      </button> */}
    </div>
  );
};
