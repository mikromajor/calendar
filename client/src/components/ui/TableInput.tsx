import TextField from "@mui/material/TextField";
import { StyledTableCell } from "../Salary/StyledElements";
import { ISalaryInit } from "../../types/salaryTypes";
import {
  useAppSelector,
  useAppDispatch,
} from "../../store/hooks/redux";
import { salaryActions } from "../../store/reducer/salaryReducer";
import { getSalary } from "../../store/reducer/http/salaryActions";

const { changeSalaryDate, calcSalary } = salaryActions;

interface ITableInputProps {
  keyWord: keyof ISalaryInit;
}
type E = React.ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement
>;

export const TableInput = ({
  keyWord,
}: ITableInputProps) => {
  const { salaryReducer, alcoReducer } = useAppSelector(
    (store) => store
  );
  const { year, month } = salaryReducer;
  const dispatch = useAppDispatch();

  const currentDate = { ...alcoReducer.currentDate };
  currentDate.year = year + "";
  currentDate.month = month + "";

  const handleOnChange = (e: E) => {
    const val = Number(e.currentTarget.value);
    dispatch(
      keyWord === "year" || keyWord === "month"
        ? getSalary({ ...currentDate, [keyWord]: val })
        : calcSalary({
            [keyWord]: val,
          })
    );
  };
  return (
    <StyledTableCell align='center'>
      <TextField
        value={salaryReducer[keyWord]}
        onChange={handleOnChange}
      />
    </StyledTableCell>
  );
};
