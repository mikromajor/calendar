import { useState } from "react";
import { InputLiquid } from "./InputLiquid";
import { AddButton } from "../../../ui";

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
      <AddButton volume={volume} percent={percent} />
    </div>
  );
};
