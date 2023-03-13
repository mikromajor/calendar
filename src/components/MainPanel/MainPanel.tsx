import {
  useAppSelector,
  useAppDispatch,
} from "../../store/hooks/redux";
import { alcoActions } from "../../store/reducer/alcoReducer";
import { setCurrentMonth } from "../../store/reducer/API/setCurrentMonth";
import { DisplayVd40 } from "../../ui";

export const MainPanel = () => {
  const { totalVodka, month } = useAppSelector(
    (state) => state.alcoReducer
  );
  const dispatch = useAppDispatch();
  const { additionVd, subtractionVd } = alcoActions;

  return (
    <div className='calendar-mainPanel'>
      <button
        onClick={() =>
          dispatch(setCurrentMonth(additionVd))
        }
      >
        "+" VD-40
      </button>

      <DisplayVd40 volume={totalVodka} month={month} />

      <button
        onClick={() =>
          dispatch(setCurrentMonth(subtractionVd))
        }
      >
        "-" VD-40
      </button>
      <br />
    </div>
  );
};
