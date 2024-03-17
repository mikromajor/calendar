import { useAppSelector } from "../../../../store/hooks/redux";
import { ALCO_CONTENT } from "../../../../constants/alcoConstants";
import { InputLiquid } from "./Inputs";

type InputLiquidPanelProps = {
  volumeDrank: string;
  setVolumeDrank: React.Dispatch<
    React.SetStateAction<string>
  >;
  percent: string;
  setPercent: React.Dispatch<React.SetStateAction<string>>;
};

export const InputLiquidPanel = ({
  volumeDrank,
  setVolumeDrank,
  percent,
  setPercent,
}: InputLiquidPanelProps) => {
  let theme = "white-theme";
  const { currentLang } = useAppSelector(
    (state) => state.appReducer
  );

  return (
    <div className='inputLiquidPanel'>
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
    </div>
  );
};
