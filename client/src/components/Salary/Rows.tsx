import React from "react";
import TextField from "@mui/material/TextField";
import {
  StyledTableCell,
  StyledTableRow,
} from "./tableElementsTheme";
import {
  useAppSelector,
  useAppDispatch,
} from "../../store/hooks/redux";
import {
  ISalaryResultsKeys,
  ISalaryIntroductionKeys,
} from "../../types/salaryTypes";
import { SALARY_CONTENT } from "../../constants/salaryConstants";
import {} from "../../store/reducer/http/salaryActions";

interface IRowsProps {
  salaryKeys:
    | ISalaryResultsKeys[]
    | ISalaryIntroductionKeys[];
  isInput: boolean;
}

export default function Rows({
  salaryKeys,
  isInput,
}: IRowsProps) {
  const { salaryReducer, userReducer } = useAppSelector(
    (store) => store
  );
  // const {} = salaryReducer;
  const { currentLang, currentTheme } = userReducer;
  const content = SALARY_CONTENT[currentLang];
  const dispatch = useAppDispatch();

  //TODO
  const handleClick = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    console.log("click fire");
  };
  return (
    <>
      {salaryKeys.map((key, i) => (
        <StyledTableRow key={key + i}>
          <StyledTableCell component='th' scope='row'>
            {content[key]}
          </StyledTableCell>

          <StyledTableCell align='right'>
            {isInput ? (
              <TextField
                variant='filled'
                value={salaryReducer[key]}
                onChange={handleClick}
              />
            ) : (
              salaryReducer[key]
            )}
          </StyledTableCell>
        </StyledTableRow>
      ))}
    </>
  );
}
