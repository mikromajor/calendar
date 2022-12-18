import {
  useAppSelector,
  useAppDispatch,
} from "../../store/hooks/redux";
import { alcoActions } from "../../store/reducer/alcoReducer";
import {} from "./..";

export const WorkHoursCalculator = () => {
  const { alcoReducer } = useAppSelector((state) => state);
  const {
    additionPercent,
    additionVolume,
    subtractionPercent,
    subtractionVolume,
  } = alcoActions;

  return (
    <div className='workHoursCalculator'>
      <h1>Work hours calculator</h1>
    </div>
  );
};
