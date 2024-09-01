import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
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
    (state) => state.salaryReducer.service
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
      {!!message && (
        <Message isError={isError} message={message} />
      )}
    </TableContainer>
  );
}
