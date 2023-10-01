// import { ActionCreatorWithoutPayload } from "@reduxjs/toolkit";
import {
  useAppSelector,
  useAppDispatch,
} from "../../store/hooks/redux";
import { alcoActions } from "../../store/reducer/alcoReducer";
import { Payload } from "../../store/reducer/types/alcoTypes";
import { PAYLOAD } from "../../store/reducer/constants/alcoConstants";

export const ControlPanel = () => {
  const dispatch = useAppDispatch();
  const { alcoReducer } = useAppSelector((state) => state);
  const {
    month,
    year,
    percentDrunk,
    volumeDrunks,
    totalClearAlcoholPerMonth,
    totalClearAlcoholPerYear,
    totalVodkaPerMonth,
    totalVodkaPerYear,
  } = alcoReducer;

  const {
    changeDate,
    changeVolumeDrunk,
    changePercentDrunk,
    calculating,
  } = alcoActions;

  return (
    <div className='calendar-controlPanel'>
      <label>
        Wybierz miesiąc:{" "}
        <input
          name='dataForMonth'
          value={month}
          // TODO : changeDate принмает обьект а не переменную
          onChange={(e) => {
            PAYLOAD.month = e.target.value;
            dispatch(changeDate(PAYLOAD));
          }}
        />
      </label>
      <label>
        Wybierz rok:{" "}
        <input
          name='dataForYear'
          value={year}
          onChange={(e) => {
            PAYLOAD.year = e.target.value;
            dispatch(changeDate(PAYLOAD));
          }}
        />
      </label>
      <label>
        Dodavana ilość spożytego alkoholu `(+,-)`:{" "}
        <input
          name='changeVolumeDrunk'
          //  value={changeVolumeDrunk}
          //  onChange={e => dispatch(changeVolumeAddingDrunk(e.target.value))}
        />
      </label>
      <label>
        Jego procent :{" "}
        <input
          name='changePercentDrunk'
          //  value={percentAddingDrunk}
          //  onChange={e => dispatch(changePercentAddingDrunk(e.target.value))}
        />
      </label>
      <button
      // onClick={e=>dispatch(calculating())}
      >
        Oblić
      </button>
    </div>
  );
};
