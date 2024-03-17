import {
  useAppDispatch,
  useAppSelector,
} from "../../../../store/hooks/redux";
import { alcoActions } from "../../../../store/reducer/alcoReducer";
import { ALCO_CONTENT } from "../../../../constants/alcoConstants";

export const Cleaner = () => {
  const dispatch = useAppDispatch();
  const { clearYearData, clearMonthData } = alcoActions;
  const { currentLang } = useAppSelector(
    (state) => state.appReducer
  );

  return (
    <div
      className='alcoCounter__cleaner'
      data-testid='cleaner'
    >
      <button onClick={() => dispatch(clearMonthData())}>
        {ALCO_CONTENT[currentLang].deleteMonth}
      </button>
      <button onClick={() => dispatch(clearYearData())}>
        {ALCO_CONTENT[currentLang].deleteYear}
      </button>
    </div>
  );
};
