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
      <div className='input-box'>
        <p id={label} className='input-box__label'>
          {label}
        </p>

        <div className='input-box__input input-box__input--white-theme'>
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
            className='input-box__input'
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
      </div>
    </>
  );
};
