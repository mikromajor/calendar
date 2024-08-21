import TextField from "@mui/material/TextField";
import { ISalaryInit } from "../../types/salaryTypes";
import {
  useAppSelector,
  useAppDispatch,
} from "../../store/hooks/redux";
import { salaryActions } from "../../store/reducer/salaryReducer";

const { changeSalaryDate } = salaryActions;

interface ITableInputProps {
  salaryKey: keyof ISalaryInit;
}

export const TableInput = ({
  salaryKey,
}: ITableInputProps) => {
  const { salaryReducer } = useAppSelector(
    (store) => store
  );
  const dispatch = useAppDispatch();

  return (
    <TextField
      variant='filled'
      value={salaryReducer[salaryKey]}
      onChange={(e) => {
        const val = e.currentTarget.value;
        dispatch(
          changeSalaryDate({
            [salaryKey]: val,
          })
        );
      }}
    />
  );
};
