import { Button } from "@mui/material";

import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../store/hooks/redux";
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
  const { currentTheme } = useAppSelector(
    (state) => state.appReducer
  );

  const variantButton =
    currentTheme === "white-theme"
      ? "outlined"
      : "contained";

  return (
    <div className='input-box'>
      <p id={label} className='input-box__label'>
        {label}
      </p>
      <div className='input-box__wrap input-box__wrap--direction-column'>
        <Button
          variant={variantButton}
          size='small'
          onClick={() => {
            dispatch(changeData(Number(data) + 1 + ""));
          }}
        >
          +1
        </Button>
        <input
          className={`input-box__input input-box__input--${currentTheme}`}
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
          variant={variantButton}
          size='small'
          onClick={() => {
            dispatch(changeData(Number(data) - 1 + ""));
          }}
        >
          -1
        </Button>
      </div>
    </div>
  );
};
