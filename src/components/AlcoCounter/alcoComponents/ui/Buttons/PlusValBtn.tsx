import { Button } from "@mui/material";

type PlusValProps = {
  step: number;
  setVal: React.Dispatch<React.SetStateAction<string>>;
};

export const PlusValBtn = ({
  step,
  setVal,
}: PlusValProps) => {
  return (
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
  );
};
