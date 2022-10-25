import {
  useAppSelector,
  useAppDispatch,
} from "../../store/hooks/redux";
import { alcoActions } from "../../store/reducer/alcoReducer/alcoReducer";
import { getCurrentMonth } from "../../store/reducer/alcoReducer/getCurrentMonth";
import { DisplayVd40 } from "../../ui";

export const MainPanel = () => {
  const { alcoReducer } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  const { additionVodka, subtractionVodka } = alcoActions;

  return (
    <>
      <br />
      <button
        onClick={() =>
          dispatch(getCurrentMonth(additionVodka))
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
          dispatch(getCurrentMonth(subtractionVodka))
        }
      >
        "-" VD-40
      </button>
      <br />
    </>
  );
};
