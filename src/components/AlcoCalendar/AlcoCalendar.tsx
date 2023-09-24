import { useAppSelector } from "../../store/hooks/redux";
import { MULTIPLIER_VALUES } from "../../store/reducer/constants";
import { alcoActions } from "../../store/reducer/alcoReducer";
import {
  ControlPanel,
  MainPanel,
  Cleaner,
  Multiplier,
} from "./..";

//  TODO:
// write a simple calculator with the next fields that you can change
// volume of liquid drunk
// quantity percent alcohol
// Calculator must adds quantity clear alcohol per month and show:
// volume of drunk clear alcohol
// equivalent volume this alcohol in 40% (vodka)
// equivalent volume this alcohol in 5% (beer)

export const AlcoCalendar = () => {
  const { alcoReducer } = useAppSelector((state) => state);
  const {
    additionPercent,
    additionVolume,
    subtractionPercent,
    subtractionVolume,
    setMultipliers,
  } = alcoActions;

  return (
    <div className='calendar'>
      <Multiplier
        setMultipliers={setMultipliers}
        values={MULTIPLIER_VALUES}
      />
      <ControlPanel
        indicatorName={"liters"}
        indicatorValue={alcoReducer.liters}
        subtractCallback={subtractionVolume}
        addCallback={additionVolume}
      />
      <ControlPanel
        indicatorName={"percent"}
        indicatorValue={alcoReducer.percent}
        subtractCallback={subtractionPercent}
        addCallback={additionPercent}
      />
      <MainPanel />
      <Cleaner />
    </div>
  );
};
