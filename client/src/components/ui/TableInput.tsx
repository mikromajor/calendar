import React, { useRef } from "react";
import TextField from "@mui/material/TextField";
import { StyledTableCell } from "../Salary/StyledElements";
import { ISalaryInit } from "../../types/salaryTypes";
import {
  useAppSelector,
  useAppDispatch,
} from "../../store/hooks/redux";
import { serverSalaryCalculate } from "../../store/reducer/http/salaryActions";
import { inputsValidation } from "../Salary/handlers/inputsValidation";
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
  const timerID = useRef<NodeJS.Timeout | null>(null);
  const inpVal = salaryReducer[keyWord];
  const isInputValueValid = inputsValidation(
    keyWord,
    inpVal
  );
  const { year, month } = salaryReducer;
  const { isLoading } = serviceReducer;
  const dispatch = useAppDispatch();

  const sentServerRequest = (inputValue: number) => {
    if (isNaN(inputValue)) {
      throw new Error("Invalid input");
    }
    dispatch(
      serverSalaryCalculate({
        year,
        month,
        [keyWord]: inputValue,
      })
    );
  };

  const debounce = (func: () => void, delay = 300) => {
    if (timerID.current) clearTimeout(timerID.current);
    timerID.current = setTimeout(() => func(), delay);
  };

  const processChange = (e: E) => {
    const val = Number(e.currentTarget.value);
    dispatch(salaryActions.updateInput({ [keyWord]: val }));
    debounce(() => sentServerRequest(val));
  };

  return (
    <StyledTableCell align='right'>
      <TextField
        value={inpVal}
        onChange={processChange}
        disabled={isLoading}
        error={!isInputValueValid}
      />
    </StyledTableCell>
  );
};
