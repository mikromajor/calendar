import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Rows from "./Rows";
import {
  SALARY_INTRODUCTIONS,
  SALARY_RESULTS,
} from "../../constants/salaryConstants";
import {
  ISalaryResults,
  ISalaryIntroduction,
} from "../../types/salaryTypes";
import { arrObjectKeys } from "./handlers/converters";

export function Salary() {
  const introductionsKeys =
    arrObjectKeys<ISalaryIntroduction>(
      SALARY_INTRODUCTIONS
    );
  const resultsKeys =
    arrObjectKeys<ISalaryResults>(SALARY_RESULTS);

  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ minWidth: 700 }}
        aria-label='customized table'
      >
        <TableBody>
          <Rows
            salaryKeys={introductionsKeys}
            isInput={true}
          />
          <Rows salaryKeys={resultsKeys} isInput={false} />
        </TableBody>
      </Table>
    </TableContainer>
  );
}
