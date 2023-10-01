// import { ActionCreatorWithoutPayload } from "@reduxjs/toolkit";
import {
  useAppSelector,
  useAppDispatch,
} from "../../store/hooks/redux";
import { alcoActions } from "../../store/reducer/alcoReducer";

export const ControlPanel = () => {
  const dispatch = useAppDispatch();
  const { alcoReducer } = useAppSelector((state) => state);
  const { month, year, percentDrunk, volumeDrunks } =
    alcoReducer;

  const {
    changeVolumeDrunk,
    changePercentDrunk,
    calculating,
    changeMonth,
    changeYear,
  } = alcoActions;

  return (
    <div className='calendar-controlPanel'>
      <label>
        Wybierz miesiąc:{" "}
        <input
          name='dataForMonth'
          type='number'
          min='1'
          max='12'
          value={month}
          onChange={(e) =>
            dispatch(changeMonth(e.target.value))
          }
        />
      </label>
      <label>
        Wybierz rok:{" "}
        <input
          name='dataForYear'
          type='number'
          min='2022'
          max='2050'
          value={year}
          onChange={(e) =>
            dispatch(changeYear(e.target.value))
          }
        />
      </label>
      <label>
        Dodavana ilość spożytego alkoholu `(+,-)`:{" "}
        <input
          name='changeVolumeDrunk'
          type='number'
          min='-1000'
          max='1000'
          value={volumeDrunks}
          onChange={(e) =>
            dispatch(changeVolumeDrunk(e.target.value))
          }
        />
      </label>
      <label>
        Jego procent :{" "}
        <input
          name='changePercentDrunk'
          type='number'
          min='0'
          max='100'
          value={percentDrunk}
          onChange={(e) =>
            dispatch(changePercentDrunk(e.target.value))
          }
        />
      </label>
      <button onClick={(e) => dispatch(calculating())}>
        Oblić
      </button>
    </div>
  );
};
