import React from "react";
import TextField from "@mui/material/TextField";
import { StyledTableCell } from "../Salary/StyledElements";
import { ISalaryInit } from "../../types/salaryTypes";
import {
  useAppSelector,
  useAppDispatch,
} from "../../store/hooks/redux";
import { serverSalaryCalculate } from "../../store/reducer/http/salaryActions";
import { inputsValidation } from "../Salary/handlers/inputsValidation";
import { debounce } from "lodash";
import { salaryActions } from "../../store/reducer/salaryReducer";
interface ITableInputProps {
  keyWord: keyof ISalaryInit;
}
type E = React.ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement
>;

export const TableInput = ({
  keyWord,
}: ITableInputProps) => {
  const { salaryReducer, serviceReducer } = useAppSelector(
    (store) => store
  );
  const inpVal = salaryReducer[keyWord];
  const isInputValValid = inputsValidation(keyWord, inpVal);
  const { year, month } = salaryReducer;
  const { isLoading } = serviceReducer;
  const dispatch = useAppDispatch();

  const sentServerRequest = (e: E) => {
    const val = Number(e.currentTarget.value);
    dispatch(
      serverSalaryCalculate({
        year,
        month,
        [keyWord]: val,
      })
    );
  };
  const processChange = (e: E) => {
    const val = Number(e.currentTarget.value);
    dispatch(salaryActions.updateInput({ [keyWord]: val }));
    debounce(sentServerRequest, 500);
  };

  return (
    <StyledTableCell align='right'>
      <TextField
        value={inpVal}
        onChange={processChange}
        disabled={isLoading}
        error={!isInputValValid}
      />
    </StyledTableCell>
  );
};
