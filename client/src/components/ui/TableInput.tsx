import TextField from "@mui/material/TextField";
import { StyledTableCell } from "../Salary/StyledElements";
import { ISalaryInit } from "../../types/salaryTypes";
import {
  useAppSelector,
  useAppDispatch,
} from "../../store/hooks/redux";
import { salaryActions } from "../../store/reducer/salaryReducer";
// import { getOne } from "../../store/reducer/http/salaryActions";

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
  const { salaryReducer } = useAppSelector(
    (store) => store
  );
  const { year, month } = salaryReducer;
  const dispatch = useAppDispatch();

  const currentDate = { year, month };

  const handleOnChange = (e: E) => {
    const val = Number(e.currentTarget.value);
    dispatch(
      calcSalary({
        [keyWord]: val,
      })
    );
  };
  return (
    <StyledTableCell align='right'>
      <TextField
        value={salaryReducer[keyWord]}
        onChange={handleOnChange}
      />
    </StyledTableCell>
  );
};
