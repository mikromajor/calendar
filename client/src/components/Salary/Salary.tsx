import * as React from "react";
import {
  Table,
  TableBody,
  TableContainer,
  Paper,
} from "@mui/material";

import { InputRows } from "./InputRows";
import {
  SALARY_INPUTS,
  SALARY_RESULTS,
} from "../../constants/salaryConstants";
import {
  ISalaryResults,
  ISalaryInputs,
} from "../../types/salaryTypes";
import { getObjKeys } from "./handlers/converters";
import { DateRow } from "./DateRow";
import { ResultsRows } from "./ResultsRows";
import { Message } from "../ui";
import { useAppSelector } from "../../store/hooks/redux";

export function Salary() {
  const introductionsKeys =
    getObjKeys<ISalaryInputs>(SALARY_INPUTS);
  const resultsKeys =
    getObjKeys<ISalaryResults>(SALARY_RESULTS);
  const { isError, message } = useAppSelector(
    (state) => state.serviceReducer
  );

  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ minWidth: 400, maxWidth: 900 }}
        aria-label='customized table'
      >
        <TableBody>
          <DateRow />
          <InputRows />
          <ResultsRows />
        </TableBody>
      </Table>
      <Message isError={isError} message={message} />
    </TableContainer>
  );
}
