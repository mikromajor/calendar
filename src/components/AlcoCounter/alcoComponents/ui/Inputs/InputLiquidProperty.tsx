import { Button } from "@mui/material";
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
  return (
    <>
      <div className='inputBlock'>
        <label
          id={label}
          className='inputBlock__label'
          htmlFor={label + "Input"}
        >
          {label}
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
          className='inputBlock__input'
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
