import TextField from "@mui/material/TextField";
import { ISalaryInit } from "../../types/salaryTypes";
import {
  useAppSelector,
  useAppDispatch,
} from "../../store/hooks/redux";
import { salaryActions } from "../../store/reducer/salaryReducer";

const { changeSalaryDate, getSalary } = salaryActions;

interface ITableInputProps {
  salaryKey: keyof ISalaryInit;
}
type E = React.ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement
>;

export const TableInput = ({
  salaryKey,
}: ITableInputProps) => {
  const { salaryReducer } = useAppSelector(
    (store) => store
  );
  const dispatch = useAppDispatch();

  const handleOnChange = (e: E) => {
    const val = Number(e.currentTarget.value);
    dispatch(
      salaryKey === "year" || salaryKey === "month"
        ? changeSalaryDate({
            [salaryKey]: val,
          })
        : getSalary({
            [salaryKey]: val,
          })
    );
    console.log(salaryKey, val, salaryReducer[salaryKey]);
  };
  return (
    <TextField
      variant='filled'
      value={salaryReducer[salaryKey]}
      onChange={handleOnChange}
    />
  );
};
