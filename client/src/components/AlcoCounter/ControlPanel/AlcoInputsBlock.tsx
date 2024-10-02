import { useState } from "react";
import { AlcoInput } from "./AlcoInput";
import { AddButton } from "components/ui";

export const AlcoInputsBlock = () => {
  const [volume, setVolumeDrank] = useState("500");
  const [percent, setPercent] = useState("5");

  return (
    <div className='control-panel__alco-inputs-block control-panel__alco-inputs-block--direction-column'>
      <AlcoInput
        role='volume'
        val={volume}
        step={100}
        setVal={setVolumeDrank}
      />

      <AlcoInput
        role='percent'
        val={percent}
        step={1}
        setVal={setPercent}
      />
      <AddButton volume={volume} percent={percent} />
    </div>
  );
};
