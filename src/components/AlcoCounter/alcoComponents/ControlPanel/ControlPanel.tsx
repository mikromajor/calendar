import { Button } from "@mui/material";
import { ALCO_CONTENT } from "../../../../constants/alcoConstants";
import { InputDatePanel } from "./InputsPanel/InputDatePanel";
import { InputLiquidPanel } from "./InputsPanel/InputLiquidPanel";
import { useAppSelector } from "../../../../store/hooks/redux";

type ControlPanelProps = {
  showPanelInputDate: boolean;
};

export const ControlPanel = ({
  showPanelInputDate,
}: ControlPanelProps) => {
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

      <div className='control-panel__inputs-container'>
        {!showPanelInputDate && <InputDatePanel />}

        <InputLiquidPanel />
      </div>

      {/* <button onClick={(e) => dispatch(asyncAdder())}>
        +50 L in 1 sec
      </button> */}
    </div>
  );
};
