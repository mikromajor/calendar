import { useAppSelector } from "../../../../store/hooks/redux";

import { ALCO_CONTENT } from "../../../../constants/alcoConstants";
import { useState } from "react";
import { InputLiquidProperty } from "../ui";

export const InputLiquidPanel = () => {
  const [volumeDrank, setVolumeDrank] = useState("500");
  const [percent, setPercent] = useState("5");

  let theme = "white-theme";
  const { currentLang } = useAppSelector(
    (state) => state.appReducer
  );

  return (
    <div className='inputLiquidPanel'>
      <InputLiquidProperty
        val={volumeDrank}
        step={100}
        setVal={setVolumeDrank}
        label={ALCO_CONTENT[currentLang].lblVolume}
      />

      <InputLiquidProperty
        val={percent}
        step={1}
        setVal={setPercent}
        label={ALCO_CONTENT[currentLang].lblPercent}
      />
    </div>
  );
};
