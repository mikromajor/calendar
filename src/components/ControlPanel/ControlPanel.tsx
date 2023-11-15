// import { ActionCreatorWithoutPayload } from "@reduxjs/toolkit";
import { Button } from "@mui/material";
import {
  useAppSelector,
  useAppDispatch,
} from "../../store/hooks/redux";
import { alcoActions } from "../../store/reducer/alcoReducer";
import {
  ALL_LANGS,
  LANGS,
} from "../../store/reducer/constants/alcoConstants";
import { LgsName } from "../../store/reducer/types/alcoTypes";
// import { asyncAdder } from "../../store/api/asyncAdder";

export const ControlPanel = () => {
  const dispatch = useAppDispatch();

  const {
    currentMonth,
    currentYear,
    percentDrunk,
    volumeDrunks,
    currentLang,
  } = useAppSelector((state) => state.alcoReducer);

  const {
    changeVolumeDrunk,
    changePercentDrunk,
    calculating,
    changeMonth,
    changeYear,
    changeLanguage,
  } = alcoActions;

  const Options = ALL_LANGS.map((langName, i) => (
    <option key={langName + i} value={langName}>
      {langName}
    </option>
  ));

  return (
    <div
      className='calendar-controlPanel'
      data-testid='controlPanel'
    >
      <label id='lblLang'>
        {LANGS.UA.lblLang}
        <select
          id='languages'
          defaultValue={currentLang}
          onChange={(e) => {
            dispatch(
              changeLanguage(
                e.currentTarget.value as LgsName
              )
            );
          }}
        >
          {Options}
        </select>
      </label>
      <label id='lblMonth'>
        {LANGS.UA.lblMonth}
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
      <label id='lblYear'>
        {LANGS.UA.lblYear}
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
      <label id='lblVolume'>
        {LANGS.UA.lblVolume}
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
      <label id='lblPercent'>
        {LANGS.UA.lblPercent}
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
      <Button
        id='btnAdd'
        variant='contained'
        onClick={(e) => dispatch(calculating())}
      >
        {LANGS.UA.btnAdd}
      </Button>

      {/* <button onClick={(e) => dispatch(asyncAdder())}>
        +50 L in 1 sec
      </button> */}
    </div>
  );
};
