import TextField from "@mui/material/TextField";
import { StyledTableCell } from "../Salary/StyledElements";
import { ISalaryInit } from "../../types/salaryTypes";
import {
  useAppSelector,
  useAppDispatch,
} from "../../store/hooks/redux";
import { serverSalaryCalculate } from "../../store/reducer/http/salaryActions";

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
  const { year, month, service } = salaryReducer;
  const dispatch = useAppDispatch();

  const handleOnChange = (e: E) => {
    const val = Number(e.currentTarget.value);

    dispatch(
      serverSalaryCalculate({ year, month, [keyWord]: val })
    );
  };
  return (
    <StyledTableCell align='right'>
      <TextField
        value={salaryReducer[keyWord]}
        onChange={handleOnChange}
        disabled={service.isLoading}
      />
    </StyledTableCell>
  );
};
