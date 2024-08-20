import React from "react";
import TextField from "@mui/material/TextField";
import {
  StyledTableCell,
  StyledTableRow,
} from "./tableElementsTheme";
import { arrObjectKeys } from "./handlers/converters";
import { SALARY_RESULTS } from "../../constants/salaryConstants";
import { useAppSelector } from "../../store/hooks/redux";
import { ISalaryResults } from "../../types/salaryTypes";
import {} from "../../store/reducer/http/salaryActions";

export default function Results() {
  const { salaryReducer, userReducer } = useAppSelector(
    (store) => store
  );
  const { currentLang, currentTheme } = userReducer;

  const rows =
    arrObjectKeys<ISalaryResults>(SALARY_RESULTS);
  return (
    <>
      {rows.map((key, i) => (
        <StyledTableRow key={key + i}>
          <StyledTableCell component='th' scope='row'>
            {key}
          </StyledTableCell>

          <StyledTableCell align='right'>
            <TextField
              variant='filled'
              value={salaryReducer[key]}
              // helperText="There are results"
            />
          </StyledTableCell>
        </StyledTableRow>
      ))}
    </>
  );
}
