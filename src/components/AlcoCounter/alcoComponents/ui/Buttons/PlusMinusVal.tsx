import { Button } from "@mui/material";

type PlusMinusValProps = {
  step: number;
  setVal: React.Dispatch<React.SetStateAction<string>>;
};

export const PlusMinusVal = ({
  step,
  setVal,
}: PlusMinusValProps) => {
  return (
    <div className='alcoCounter-block_plus_minus'>
      <Button
        variant='contained'
        onClick={() => {
          setVal((prev: string) =>
            (Number(prev) + step).toString()
          );
        }}
      >
        +{step}
      </Button>
      <Button
        variant='contained'
        onClick={() => {
          setVal((prev: string) =>
            (Number(prev) - step).toString()
          );
        }}
      >
        -{step}
      </Button>
    </div>
  );
};
