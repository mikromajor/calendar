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
import { trimFirstZero } from "../../../../store/reducer/alcoHandlers";
import {
  SelectLang,
  BlockHeader,
  InputDate,
  InputLiquidProperty,
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

      <div className='alcoCounter-inputBlock'>
        <SelectLang />

        <InputDate
          data={currentMonth}
          changeData={changeMonth}
          label='lblMonth'
        />
        <InputDate
          data={currentYear}
          changeData={changeYear}
          label='lblYear'
        />
        <InputLiquidProperty
          val={volumeDrank}
          step={100}
          setVal={setVolumeDrank}
          label='lblVolume'
        />

        <InputLiquidProperty
          val={percent}
          step={1}
          setVal={setPercent}
          label='lblPercent'
        />
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
