import { ActionCreatorWithoutPayload } from "@reduxjs/toolkit";
import {
  useAppSelector,
  useAppDispatch,
} from "../../store/hooks/redux";

export const ControlPanel = () => {
  const dispatch = useAppDispatch();
  const { alcoReducer } = useAppSelector((state) => state);
  return (
    <div className='calendar-controlPanel'>
      <label>
        Wybież miesiąc:{" "}
        <input
          name='dataForMonth'
          //  value={userMonth}
          //  onChange={e => dispatch(changeMonth(e.target.value))}
        />
      </label>
      <label>
        Dodavana ilość spożytego alkoholu `(względnie +,-)`:{" "}
        <input
          name='changeVolumeDrunk'
          //  value={volumeAddingDrunk}
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
