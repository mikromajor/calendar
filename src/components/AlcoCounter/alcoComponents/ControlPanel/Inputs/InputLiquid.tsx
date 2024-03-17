import { Button } from "@mui/material";
import { trimFirstZero } from "../../../../../store/reducer/alcoHandlers";

type InputLiquidProps = {
  val: string;
  step: number;
  setVal: React.Dispatch<React.SetStateAction<string>>;
  label: string;
};

export const InputLiquid = ({
  val,
  step,
  setVal,
  label,
}: InputLiquidProps) => {
  return (
    <>
      <div className='input-block'>
        <p id={label} className='input-block__label'>
          {label}
        </p>
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
          className='input-block__input'
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
