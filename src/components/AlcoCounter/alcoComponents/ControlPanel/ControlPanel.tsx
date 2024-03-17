import {
  useAppSelector,
  useAppDispatch,
} from "../../../../store/hooks/redux";
import { alcoActions } from "../../../../store/reducer/alcoReducer";
import { ALCO_CONTENT } from "../../../../constants/alcoConstants";
// import { asyncAdder } from "../../store/api/asyncAdder";
import { useState } from "react";
import { InputDatePanel } from "./InputDatePanel";
import { InputLiquidPanel } from "./InputLiquidPanel";
import { SwitchPanel } from "./SwitchPanel";

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

  const dispatch = useAppDispatch();

  const { day, month, year } = useAppSelector(
    (state) => state.alcoReducer.currentDate
  );
  let theme = "white-theme";
  const { currentLang } = useAppSelector(
    (state) => state.appReducer
  );

  const {
    calculating,
    changeDay,
    changeMonth,
    changeYear,
  } = alcoActions;

  return (
    <div
      className='control-panel'
      data-testid='control-panel'
    >
      <h2
        className={`control-panel__header control-panel__header--${theme}`}
      >
        {ALCO_CONTENT[currentLang].controlPanelHeader}
      </h2>

      <div className='control-panel__block-of-inputs'>
        {!showPanelInputDate && <InputDatePanel />}
        <InputLiquidPanel
          volumeDrank={volumeDrank}
          setVolumeDrank={setVolumeDrank}
          percent={percent}
          setPercent={setPercent}
        />
      </div>

      <SwitchPanel
        setShowAlcoCalendar={setShowAlcoCalendar}
        volumeDrank={volumeDrank}
        percent={percent}
      />

      {/* <button onClick={(e) => dispatch(asyncAdder())}>
        +50 L in 1 sec
      </button> */}
    </div>
  );
};
