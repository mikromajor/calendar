// import { ActionCreatorWithoutPayload } from "@reduxjs/toolkit";
import { Button } from "@mui/material";
import {
  useAppSelector,
  useAppDispatch,
} from "../../store/hooks/redux";
import { alcoActions } from "../../store/reducer/alcoReducer";
import {
  ALL_ALCO_CONTENT,
  ALCO_CONTENT,
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
  } = useAppSelector((state) => state.alcoReducer);
  // add compatibility V1 & V2
  let currentLang = useAppSelector((state) =>
    !!state.alcoReducer?.currentLang
      ? state.alcoReducer.currentLang
      : "EN"
  );
  const {
    changeVolumeDrunk,
    changePercentDrunk,
    calculating,
    changeMonth,
    changeYear,
    changeLanguage,
  } = alcoActions;

  const Options = ALL_ALCO_CONTENT.map((langName, i) => (
    <option key={langName + i} value={langName}>
      {langName}
    </option>
  ));

  return (
    <div
      className='calendar-controlPanel'
      data-testid='controlPanel'
    >
      <div className='calendar-inlineButtons'>
        <label id='lblLang'>
          {ALCO_CONTENT[currentLang].lblLang}
          <select
            id='LANGS'
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
          {ALCO_CONTENT[currentLang].lblMonth}
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
          {ALCO_CONTENT[currentLang].lblYear}
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
          {ALCO_CONTENT[currentLang].lblVolume}
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
          {ALCO_CONTENT[currentLang].lblPercent}
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
      </div>
      <div className='calendar-inlineButtons'>
        <Button
          id='btnAdd'
          variant='contained'
          onClick={(e) => dispatch(calculating())}
        >
          {ALCO_CONTENT[currentLang].btnAdd}
        </Button>
      </div>

      {/* <button onClick={(e) => dispatch(asyncAdder())}>
        +50 L in 1 sec
      </button> */}
    </div>
  );
};
