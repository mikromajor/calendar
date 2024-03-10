import { Button } from "@mui/material";

import { useAppDispatch } from "../../../../../store/hooks/redux";
import { ActionsChangeData } from "../../../../../types/alcoTypes";

type InputDataProps = {
  data: string;
  changeData: ActionsChangeData;
  label: string;
};

export const InputDate = ({
  data,
  changeData,
  label,
}: InputDataProps) => {
  const dispatch = useAppDispatch();

  return (
    <div className='alcoCounter-inputBlock-input'>
      <label id={label} htmlFor={label + "Input"}>
        {label}
      </label>
      <Button
        variant='outlined'
        size='small'
        onClick={() => {
          dispatch(changeData(Number(data) + 1 + ""));
        }}
      >
        +1
      </Button>
      <input
        id={label + "Input"}
        type='number'
        value={data}
        onChange={(e) => {
          const newData = e.target.value;
          Number(newData) > 0 &&
            dispatch(changeData(newData));
        }}
      />
      <Button
        variant='outlined'
        size='small'
        onClick={() => {
          dispatch(changeData(Number(data) - 1 + ""));
        }}
      >
        -1
      </Button>
    </div>
  );
};
