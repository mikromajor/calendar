import { useAppDispatch } from "../../store/hooks/redux";
import { alcoActions } from "../../store/reducer/alcoReducer";
import { PAYLOAD } from "../../store/reducer/alcoTypes";

export const Multiplier = () => {
  const dispatch = useAppDispatch();
  const { setMultipliers } = alcoActions;

  const changeMultiplier = (
    e: React.MouseEvent<HTMLInputElement, MouseEvent>
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
          onClick={changeMultiplier}
        />
        <label htmlFor='zeroOne'>x0.1</label>
        <input
          type='radio'
          id='one'
          value='1'
          checked
          onClick={changeMultiplier}
        />
        <label htmlFor='one'>x1</label>
        <input
          type='radio'
          id='ten'
          value='10'
          onClick={changeMultiplier}
        />
        <label htmlFor='javascript'>x10</label>
      </div>
    </fieldset>
  );
};
