import {
  useAppDispatch,
  useAppSelector,
} from "../../store/hooks/redux";
import { PAYLOAD } from "../../store/reducer/alcoTypes";
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
        <input
          id={values.a}
          type='radio'
          value={values.a}
          onChange={changeMultiplier}
          checked={multiplier === Number(values.a)}
        />
        <label htmlFor={values.a}>{values.a}</label>
        <input
          id={values.b}
          type='radio'
          value={values.b}
          onChange={changeMultiplier}
          checked={multiplier === Number(values.b)}
        />
        <label htmlFor={values.b}>{values.b}</label>
        <input
          id={values.c}
          type='radio'
          value={values.c}
          onChange={changeMultiplier}
          checked={multiplier === Number(values.c)}
        />
        <label htmlFor={values.c}>{values.c}</label>
      </div>
    </fieldset>
  );
};
