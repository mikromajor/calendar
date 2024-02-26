import { Button } from "@mui/material";

import { useAppSelector } from "../../../../../store/hooks/redux";

import { ALCO_CONTENT } from "../../../../../constants/alcoConstants";
import { trimFirstZero } from "../../../../../store/reducer/alcoHandlers/";

type InputLiquidPropertyProps = {
  val: string;
  step: number;
  setVal: React.Dispatch<React.SetStateAction<string>>;
  label: string;
};

export const InputLiquidProperty = ({
  val,
  step,
  setVal,
  label,
}: InputLiquidPropertyProps) => {
  const { currentLang } = useAppSelector(
    (state) => state.alcoReducer
  );

  return (
    <>
      <div className='alcoCounter-inputBlock-input'>
        <label id={label} htmlFor={label + "Input"}>
          {ALCO_CONTENT[currentLang].lblVolume}
        </label>
        <Button
          variant='outlined'
          size='small'
          onClick={() => {
            setVal((prev: string) =>
              (Number(prev) + step).toString()
            );
          }}
        >
          +{step}
        </Button>
        <input
          id={label + "Input"}
          type='number'
          value={val}
          onChange={(e) =>
            setVal(trimFirstZero(e.target.value))
          }
        />
        <Button
          variant='outlined'
          size='small'
          onClick={() => {
            setVal((prev: string) =>
              (Number(prev) - step).toString()
            );
          }}
        >
          -{step}
        </Button>
      </div>
    </>
  );
};
