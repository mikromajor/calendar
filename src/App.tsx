import {
  useAppSelector,
  useAppDispatch,
} from "./store/hooks/redux";
import { alcoActions } from "./store/reducer/alcoReducer/alcoReducer";
import ControlPanel from "./ui/ControlPanel";

function App() {
  const { alcoReducer } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
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
      <br />
      <button
        onClick={() => dispatch(additionVodka())}
        // onClick={() => setVodka(handlerQuantityVodka())}
      >
        Add drunk vodka
      </button>
      <div>Liters vodka : {alcoReducer.totalVodka}</div>

      <button
        onClick={() => dispatch(subtractionVodka())}
        // onClick={() => setVodka(handlerQuantityVodka())}
      >
        Add drunk vodka
      </button>
    </>
  );
}
export default App;
