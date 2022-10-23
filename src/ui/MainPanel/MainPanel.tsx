import {
  useAppSelector,
  useAppDispatch,
} from "../../store/hooks/redux";
import { alcoActions } from "../../store/reducer/alcoReducer/alcoReducer";
import { getMonth } from "../../store/reducer/alcoReducer/getMonth";

export const MainPanel = () => {
  const { alcoReducer } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  const { additionVodka, subtractionVodka } = alcoActions;

  return (
    <>
      <br />
      <button
        onClick={() => dispatch(getMonth(additionVodka))}
      >
        "+" VD-40
      </button>
      <h4>
        Current volume VD-40 : {alcoReducer.totalVodka}
      </h4>
      <h5>Current month : {alcoReducer.month}</h5>
      <button
        onClick={() => dispatch(getMonth(subtractionVodka))}
      >
        "-" VD-40
      </button>
      <br />
    </>
  );
};
