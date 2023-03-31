import {
  useAppDispatch,
  useAppSelector,
} from "../../store/hooks/redux";
import { PAYLOAD } from "../../store/reducer/constants";
import { MultiplierProps } from "./MultiplierProps";

export const Multiplier = ({
  setMultipliers,
  values,
}: MultiplierProps) => {
  const dispatch = useAppDispatch();
  const multiplier = useAppSelector(
    (state) => state.alcoReducer.multiplier
  );

  const changeMultiplier = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    PAYLOAD.multiplier = Number(e.currentTarget.value);
    dispatch(setMultipliers(PAYLOAD));
  };
  return (
    <fieldset className='calendar-multiplier'>
      <legend>Select the multiplier:</legend>
      <div>
        {values.map((val, i) => (
          <div key={val + i}>
            <input
              id={val}
              type='radio'
              value={val}
              onChange={changeMultiplier}
              checked={multiplier === Number(val)}
            />
            <label htmlFor={val}>{val}</label>
          </div>
        ))}
      </div>
    </fieldset>
  );
};
