import {
  useAppSelector,
  useAppDispatch,
} from "./store/hooks/redux";
import { alcoActions } from "./store/reducer/alcoReducer/alcoReducer";
import { ControlPanel, MainPanel, Cleaner } from "./ui";

function App() {
  const { alcoReducer } = useAppSelector((state) => state);
  const {
    additionPercent,
    additionVolume,
    subtractionPercent,
    subtractionVolume,
  } = alcoActions;

  return (
    <>
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
    </>
  );
}
export default App;
