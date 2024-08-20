import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";

export function Salary() {
  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ minWidth: 700 }}
        aria-label='customized table'
      >
        <TableBody>
          {/* {rows.map((row) => (
            <StyledTableRow key={row.year}>
              <StyledTableCell component='th' scope='row'>
                {row.year}
              </StyledTableCell>
              <StyledTableCell align='right'>
                {row.month}
              </StyledTableCell>
            </StyledTableRow>
          ))} */}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
