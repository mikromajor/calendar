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
import { SelectLang, BlockHeader, InputDate } from "../ui";

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
        <div className='alcoCounter inputBlock'>
          <label id='lblVolume' htmlFor='changeVolumeDrunk'>
            {ALCO_CONTENT[currentLang].lblVolume}
          </label>
          <Button
            variant='outlined'
            size='small'
            onClick={() => {
              setVolumeDrank((prev: string) =>
                (Number(prev) + 100).toString()
              );
            }}
          >
            +100
          </Button>
          <input
            id='changeVolumeDrunk'
            name='changeVolumeDrunk'
            type='number'
            value={volumeDrank}
            onChange={(e) =>
              setVolumeDrank(trimFirstZero(e.target.value))
            }
          />
          <Button
            variant='outlined'
            size='small'
            onClick={() => {
              setVolumeDrank((prev: string) =>
                (Number(prev) - 100).toString()
              );
            }}
          >
            -100
          </Button>
        </div>

        <div className='alcoCounter inputBlock'>
          <label id='lblPercent' htmlFor='changePercent'>
            {ALCO_CONTENT[currentLang].lblPercent}
          </label>
          <Button
            variant='outlined'
            size='small'
            onClick={() => {
              setPercent((prev: string) =>
                (Number(prev) + 100).toString()
              );
            }}
          >
            +1
          </Button>
          <input
            id='changePercent'
            name='changePercent'
            type='number'
            min='0'
            max='100'
            value={percent}
            onChange={(e) =>
              setPercent(trimFirstZero(e.target.value))
            }
          />
          <Button
            variant='outlined'
            size='small'
            onClick={() => {
              setPercent((prev: string) =>
                (Number(prev) - 100).toString()
              );
            }}
          >
            -1
          </Button>
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
