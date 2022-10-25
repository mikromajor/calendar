import {
  useAppSelector,
  useAppDispatch,
} from "../../store/hooks/redux";
import { alcoActions } from "../../store/reducer/alcoReducer";
import { setCurrentMonth } from "../../store/reducer/API/setCurrentMonth";
import { DisplayVd40 } from "../../ui";

export const MainPanel = () => {
  const { alcoReducer } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  const { additionVd, subtractionVd } = alcoActions;

  return (
    <>
      <br />
      <button
        onClick={() =>
          dispatch(setCurrentMonth(additionVd))
        }
      >
        "+" VD-40
      </button>

      <DisplayVd40
        volume={alcoReducer.totalVodka}
        month={alcoReducer.month}
      />

      <button
        onClick={() =>
          dispatch(setCurrentMonth(subtractionVd))
        }
      >
        "-" VD-40
      </button>
      <br />
    </>
  );
};
