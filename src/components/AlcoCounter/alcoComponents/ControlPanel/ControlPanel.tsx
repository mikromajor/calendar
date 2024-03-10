// import { ActionCreatorWithoutPayload } from "@reduxjs/toolkit";
import { Button } from "@mui/material"; //   TODO: check weight;
import {
  useAppSelector,
  useAppDispatch,
} from "../../../../store/hooks/redux";
import { alcoActions } from "../../../../store/reducer/alcoReducer";
import { ALCO_CONTENT } from "../../../../constants/alcoConstants";
// import { asyncAdder } from "../../store/api/asyncAdder";
import { useState } from "react";

import { InputDate, InputLiquidProperty } from "../ui";

type ControlPanelProps = {
  setShowAlcoCalendar: React.Dispatch<
    React.SetStateAction<boolean>
  >;
};

export const ControlPanel = ({
  setShowAlcoCalendar,
}: ControlPanelProps) => {
  const [volumeDrank, setVolumeDrank] = useState("500");
  const [percent, setPercent] = useState("5");

  const dispatch = useAppDispatch();

  const { day, month, year } = useAppSelector(
    (state) => state.alcoReducer.currentDate
  );

  const { currentLang } = useAppSelector(
    (state) => state.appReducer
  );

  const {
    calculating,
    changeDay,
    changeMonth,
    changeYear,
  } = alcoActions;

  return (
    <div
      className='controlPanel'
      data-testid='controlPanel'
    >
      <h2>
        {ALCO_CONTENT[currentLang].controlPanelHeader}
      </h2>
      <div className='alcoCounter-inputBlock'>
        <InputDate
          data={day}
          changeData={changeDay}
          label={ALCO_CONTENT[currentLang].lblDay}
        />

        <InputDate
          data={month}
          changeData={changeMonth}
          label={ALCO_CONTENT[currentLang].lblMonth}
        />
        <InputDate
          data={year}
          changeData={changeYear}
          label={ALCO_CONTENT[currentLang].lblYear}
        />
        <InputLiquidProperty
          val={volumeDrank}
          step={100}
          setVal={setVolumeDrank}
          label={ALCO_CONTENT[currentLang].lblVolume}
        />

        <InputLiquidProperty
          val={percent}
          step={1}
          setVal={setPercent}
          label={ALCO_CONTENT[currentLang].lblPercent}
        />
      </div>

      <div className='alcoCounter-navBtn'>
        {/*TODO: around the button add different smiles for 5 sec after clicked "calc button" */}
        {/* <div></div>  */}
        <Button
          id='btnAdd'
          variant='contained'
          onClick={() => {
            dispatch(calculating([volumeDrank, percent]));
          }}
        >
          {ALCO_CONTENT[currentLang].btnAdd}
        </Button>
        <Button
          id='btnShowAlcoCalendar'
          variant='contained'
          onClick={() =>
            setShowAlcoCalendar((show) => !show)
          }
        >
          {ALCO_CONTENT[currentLang].btnShowAlcoCalendar}
        </Button>
      </div>

      {/* <button onClick={(e) => dispatch(asyncAdder())}>
        +50 L in 1 sec
      </button> */}
    </div>
  );
};
