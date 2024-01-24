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
import { useState } from "react";

export const ControlPanel = () => {
  const [volumeDrank, setVolumeDrank] = useState("500");
  const [percent, setPercent] = useState("5");

  const dispatch = useAppDispatch();

  const { currentMonth, currentYear } = useAppSelector(
    (state) => state.alcoReducer
  );
  // add compatibility V1 & V2
  let currentLang = useAppSelector(
    (state) =>
      state.alcoReducer.currentLang.toUpperCase() as LgsName
  );
  const {
    // changeVolumeDrunk,
    // changepercent,
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
      <h2>
        {" "}
        {ALCO_CONTENT[currentLang].controlPanelHeader}
      </h2>
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
            min='0'
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
            value={volumeDrank}
            onChange={(e) => setVolumeDrank(e.target.value)}
          />
        </label>
        <label id='lblPercent'>
          {ALCO_CONTENT[currentLang].lblPercent}
          <input
            name='changepercent'
            type='number'
            min='0'
            max='100'
            value={percent}
            onChange={(e) => setPercent(e.target.value)}
          />
        </label>
      </div>
      <div className='calendar-inlineButtons'>
        {/* todo  */}
        <Button
          id='btnAdd'
          variant='contained'
          onClick={(e) =>
            dispatch(calculating([volumeDrank, percent]))
          }
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
