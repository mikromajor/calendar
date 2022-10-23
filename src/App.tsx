import {
  useAppSelector,
  useAppDispatch,
} from "./store/hooks/redux";
import { alcoActions } from "./store/reducer/alcoReducer/alcoReducer";
import ControlPanel from "./ui/ControlPanel/ControlPanel";

function App() {
  const { alcoReducer } = useAppSelector((state) => state);
  const {
    additionPercent,
    additionVodka,
    additionVolume,
    subtractionPercent,
    subtractionVolume,
    subtractionVodka,
  } = alcoActions;

  return (
    <>
      <ControlPanel
        indicatorName={"liters"}
        indicatorValue={alcoReducer.liters}
        subtractCallback={subtractionVolume}
        addCallback={additionVolume}
      />
      <br />
      <ControlPanel
        indicatorName={"percent"}
        indicatorValue={alcoReducer.percent}
        subtractCallback={subtractionPercent}
        addCallback={additionPercent}
      />
      <br />
      <ControlPanel
        indicatorName={"totalVodka"}
        indicatorValue={alcoReducer.totalVodka}
        subtractCallback={subtractionVodka}
        addCallback={additionVodka}
      />
    </>
  );
}
export default App;
