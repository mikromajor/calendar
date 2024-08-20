import { Button } from "@mui/material";
import { ALCO_CONTENT } from "../../../../constants/alcoConstants";
import { InputLiquidPanel } from "./InputsPanel/InputLiquidPanel";
import { useAppSelector } from "../../../../store/hooks/redux";

export const ControlPanel = () => {
  const { currentLang, currentTheme } = useAppSelector(
    (state) => state.userReducer
  );
  return (
    <div
      className={`control-panel control-panel--${currentTheme}`}
      data-testid='control-panel'
    >
      <h2
        className={`control-panel__header control-panel__header--${currentTheme}`}
      >
        {ALCO_CONTENT[currentLang].controlPanelHeader}
      </h2>

      <div className='control-panel__inputs-container'>
        <InputLiquidPanel />
      </div>
    </div>
  );
};
