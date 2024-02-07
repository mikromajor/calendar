// import { ActionCreatorWithoutPayload } from "@reduxjs/toolkit";
import { Button } from "@mui/material"; //   TODO: check weight;
import {
  useAppSelector,
  useAppDispatch,
} from "../../../../store/hooks/redux";
import { alcoActions } from "../../../../store/reducer/alcoReducer";
import { ALCO_CONTENT } from "../../../../store/reducer/constants/alcoConstants";
// import { asyncAdder } from "../../store/api/asyncAdder";
import { useState } from "react";
import { trimFirstZero } from "../../../../store/reducer/alcoHandlers";
import {
  SelectLang,
  PlusMinusData,
  PlusMinusVal,
  BlockHeader,
} from "../ui";

export const ControlPanel = () => {
  const [volumeDrank, setVolumeDrank] = useState("500");
  const [percent, setPercent] = useState("5");

  const dispatch = useAppDispatch();

  const { currentMonth, currentYear, currentLang } =
    useAppSelector((state) => state.alcoReducer);

  const { calculating, changeMonth, changeYear } =
    alcoActions;

  return (
    <div
      className='alcoCounter-controlPanel'
      data-testid='controlPanel'
    >
      <BlockHeader title='controlPanelHeader' />

      <div className='alcoCounter-inputs'>
        <div className='alcoCounter inputBlock'>
          <SelectLang />
        </div>

        <div className='alcoCounter inputBlock'>
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
          <PlusMinusData callBack={changeMonth} arg={"1"} />
        </div>
        <div className='alcoCounter inputBlock'>
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
          <PlusMinusData callBack={changeYear} arg={"1"} />
        </div>
        <div className='alcoCounter inputBlock'>
          <label id='lblVolume'>
            {ALCO_CONTENT[currentLang].lblVolume}
            <input
              name='changeVolumeDrunk'
              type='number'
              value={volumeDrank}
              onChange={(e) =>
                setVolumeDrank(
                  trimFirstZero(e.target.value)
                )
              }
            />
          </label>
          <PlusMinusVal
            step={100}
            setVal={setVolumeDrank}
          />
        </div>
        <div className='alcoCounter inputBlock'>
          <label id='lblPercent'>
            {ALCO_CONTENT[currentLang].lblPercent}
            <input
              name='changePercent'
              type='number'
              min='0'
              max='100'
              value={percent}
              onChange={(e) =>
                setPercent(trimFirstZero(e.target.value))
              }
            />
          </label>
          <PlusMinusVal step={1} setVal={setVolumeDrank} />
        </div>
      </div>
      <div className='alcoCounter-addButton'>
        {/*TODO: around the button add different smiles for 5 sec after clicked "calc button" */}
        {/* <div></div>  */}
        <Button
          id='btnAdd'
          variant='contained'
          onClick={(e) =>
            dispatch(calculating([volumeDrank, percent]))
          }
        >
          {ALCO_CONTENT[currentLang].btnAdd}
        </Button>
        {/* <div></div> */}
      </div>

      {/* <button onClick={(e) => dispatch(asyncAdder())}>
        +50 L in 1 sec
      </button> */}
    </div>
  );
};
