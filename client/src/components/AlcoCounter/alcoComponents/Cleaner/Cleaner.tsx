import {
  useAppDispatch,
  useAppSelector,
} from "../../../../store/hooks/redux";
import { alcoActions } from "../../../../store/reducer/alcoReducer";
import { ALCO_CONTENT } from "../../../../constants/alcoConstants";

export const Cleaner = () => {
  const dispatch = useAppDispatch();
  const { clearYearData, clearMonthData } = alcoActions;
  const { currentLang, currentTheme } = useAppSelector(
    (state) => state.userReducer
  );

  return (
    <div
      className={`alco-counter__cleaner alco-counter__cleaner--${currentTheme}`}
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
