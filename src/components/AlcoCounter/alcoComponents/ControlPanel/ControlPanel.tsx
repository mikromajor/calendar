import { useAppSelector } from "../../../../store/hooks/redux";
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

  let theme = "white-theme";
  const { currentLang } = useAppSelector(
    (state) => state.appReducer
  );

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

      <div
        className={`control-panel__inputs-container control-panel__inputs-container--${theme}`}
      >
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
