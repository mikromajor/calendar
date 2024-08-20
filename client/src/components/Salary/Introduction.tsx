import React from "react";
import TextField from "@mui/material/TextField";
import {
  StyledTableCell,
  StyledTableRow,
} from "./tableElementsTheme";
import { arrObjectKeys } from "./handlers/converters";
import {
  SALARY_CONTENT,
  SALARY_INTRODUCTIONS,
} from "../../constants/salaryConstants";
import {
  useAppSelector,
  useAppDispatch,
} from "../../store/hooks/redux";
import { ISalaryIntroduction } from "../../types/salaryTypes";
import {} from "../../store/reducer/http/salaryActions";

export default function Introduction() {
  const { salaryReducer, userReducer } = useAppSelector(
    (store) => store
  );
  // const {} = salaryReducer;
  const { currentLang, currentTheme } = userReducer;
  const content = SALARY_CONTENT[currentLang];
  const dispatch = useAppDispatch();
  const introductionRows =
    arrObjectKeys<ISalaryIntroduction>(
      SALARY_INTRODUCTIONS
    );

  //TODO
  const handleClick = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {};
  return (
    <>
      {introductionRows.map((key, i) => (
        <StyledTableRow key={key + i}>
          <StyledTableCell component='th' scope='row'>
            {content[key]}
          </StyledTableCell>

          <StyledTableCell align='right'>
            <TextField
              variant='filled'
              value={salaryReducer[key]}
              onChange={handleClick}
            />
          </StyledTableCell>
        </StyledTableRow>
      ))}
    </>
  );
}
