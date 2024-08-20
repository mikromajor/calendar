import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Introduction from "./Introduction";
import Results from "./Results";

export function Salary() {
  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ minWidth: 700 }}
        aria-label='customized table'
      >
        <TableBody>
          <Introduction />
          <Results />
        </TableBody>
      </Table>
    </TableContainer>
  );
}
