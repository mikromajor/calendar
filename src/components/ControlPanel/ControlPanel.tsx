// import { ActionCreatorWithoutPayload } from "@reduxjs/toolkit";
import {
  useAppSelector,
  useAppDispatch,
} from "../../store/hooks/redux";
import { alcoActions } from "../../store/reducer/alcoReducer";
import { asyncAdder } from "../../store/api/asyncAdder";

export const ControlPanel = () => {
  const dispatch = useAppDispatch();
  const { alcoReducer } = useAppSelector((state) => state);
  const {
    currentMonth,
    currentYear,
    percentDrunk,
    volumeDrunks,
  } = alcoReducer;

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
          value={currentMonth}
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
          value={currentYear}
          onChange={(e) =>
            dispatch(changeYear(e.target.value))
          }
        />
      </label>
      <label>
        Dodavana ilość spożytego alkoholu w litrach:{" "}
        <input
          name='changeVolumeDrunk'
          type='number'
          min='-100'
          max='100'
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
        Dodaj
      </button>

      <button onClick={(e) => dispatch(asyncAdder())}>
        +50 L in 1 sec
      </button>
    </div>
  );
};
