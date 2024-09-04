import React, { useState } from "react";
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
  const [inputVal, setInputVal] = useState(
    salaryReducer[keyWord]
  );
  const { year, month, service } = salaryReducer;
  const dispatch = useAppDispatch();

  const handleOnChange = (e: E) => {
    const val = Number(e.currentTarget.value);
    setInputVal(val);
    setTimeout(
      () =>
        dispatch(
          serverSalaryCalculate({
            year,
            month,
            [keyWord]: inputVal,
          })
        ),
      2000 //delay for server response
    );
  };
  return (
    <StyledTableCell align='right'>
      <TextField
        value={inputVal}
        onChange={handleOnChange}
        disabled={service.isLoading}
      />
    </StyledTableCell>
  );
};
