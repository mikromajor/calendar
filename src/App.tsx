import {
  useAppSelector,
  useAppDispatch,
} from "./store/hooks/redux";
import { alcoActions } from "./store/reducer/alcoReducer";
import {
  ControlPanel,
  MainPanel,
  Cleaner,
  Multiplier,
} from "./components";

function App() {
  const { alcoReducer } = useAppSelector((state) => state);
  const {
    additionPercent,
    additionVolume,
    subtractionPercent,
    subtractionVolume,
  } = alcoActions;

  return (
    <div className='calendar'>
      <Multiplier />
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
}
export default App;
