import { Button } from "@mui/material";

import {
  useAppSelector,
  useAppDispatch,
} from "../../../../../store/hooks/redux";
import { alcoActions } from "../../../../../store/reducer/alcoReducer";
import { ALCO_CONTENT } from "../../../../../store/reducer/constants/alcoConstants";
import {
  ActionsChangeData,
  AlcoContentLangData,
} from "../../../../../store/reducer/types/alcoTypes";
import { PlusMinusDate } from "../Buttons";

type InputDataProps = {
  data: string;
  changeData: ActionsChangeData;
  label: AlcoContentLangData;
};

export const InputDate = ({
  data,
  changeData,
  label,
}: InputDataProps) => {
  const { currentLang } = useAppSelector(
    (state) => state.alcoReducer
  );
  const dispatch = useAppDispatch();

  return (
    <div className='alcoCounter inputBlock'>
      <label id={label} htmlFor={label + "Input"}>
        {ALCO_CONTENT[currentLang][label]}
      </label>
      <Button
        variant='outlined'
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
          Number(newData) > -1 &&
            dispatch(changeData(newData));
        }}
      />
      <Button
        variant='outlined'
        onClick={() => {
          dispatch(changeData(Number(data) - 1 + ""));
        }}
      >
        -1
      </Button>
    </div>
  );
};
