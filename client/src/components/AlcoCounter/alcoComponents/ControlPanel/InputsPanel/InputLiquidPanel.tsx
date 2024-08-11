import { useState } from "react";
import { InputLiquid } from "../Inputs/InputLiquid";
import { AddButton } from "../../../../ui";

export const InputLiquidPanel = () => {
  const [volume, setVolumeDrank] = useState("500");
  const [percent, setPercent] = useState("5");

  return (
    <div className='control-panel__inputs-panel control-panel__inputs-panel--direction-column'>
      <InputLiquid
        role='volume'
        val={volume}
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
        {/* <Button
          id='btnAdd'
          variant='contained'
          onClick={calculating}
        >
          {ALCO_CONTENT[currentLang].btnAdd}
        </Button> */}
        <AddButton volume={volume} percent={percent} />
      </div>
    </div>
  );
};
