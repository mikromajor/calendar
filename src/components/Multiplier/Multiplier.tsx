import {
  useAppDispatch,
  useAppSelector,
} from "../../store/hooks/redux";
import { alcoActions } from "../../store/reducer/alcoReducer";
import { PAYLOAD } from "../../store/reducer/alcoTypes";

export const Multiplier = () => {
  const dispatch = useAppDispatch();
  const { setMultipliers } = alcoActions;
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
          id='zeroOne'
          type='radio'
          value='0.1'
          onChange={changeMultiplier}
          checked={multiplier === 0.1}
        />
        <label htmlFor='zeroOne'>x0.1</label>
        <input
          type='radio'
          id='one'
          value='1'
          onChange={changeMultiplier}
          checked={multiplier === 1}
        />
        <label htmlFor='one'>x1</label>
        <input
          type='radio'
          id='ten'
          value='10'
          onChange={changeMultiplier}
          checked={multiplier === 10}
        />
        <label htmlFor='ten'>x10</label>
      </div>
    </fieldset>
  );
};
