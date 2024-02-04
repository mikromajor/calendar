import {
  useAppDispatch,
  useAppSelector,
} from "../../../../store/hooks/redux";
import { alcoActions } from "../../../../store/reducer/alcoReducer";
import { ALCO_CONTENT } from "../../../../store/reducer/constants/alcoConstants";

export const Cleaner = () => {
  const dispatch = useAppDispatch();
  const { clearStorageForYear, clearMonthData } =
    alcoActions;
  const { currentLang } = useAppSelector(
    (state) => state.alcoReducer
  );

  return (
    <div
      className='alcoCounter-cleaner'
      data-testid='cleaner'
    >
      <button onClick={() => dispatch(clearMonthData())}>
        {ALCO_CONTENT[currentLang].deleteMonth}
      </button>
      <button
        onClick={() => dispatch(clearStorageForYear())}
      >
        {ALCO_CONTENT[currentLang].deleteYear}
      </button>
    </div>
  );
};
