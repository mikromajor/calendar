import {
  StyledTableCell,
  StyledTableRow,
} from "./StyledElements";
import { useAppSelector } from "store/hooks/redux";
import { ISalaryResultsKeys } from "types/salaryTypes";
import {
  SALARY_CONTENT,
  SALARY_RESULTS,
} from "constants/salaryConstants";
import { Skeleton } from "@mui/material";

export function ResultsRows() {
  const { userReducer, salaryReducer, serviceReducer } =
    useAppSelector((store) => store);
  const { currentLang } = userReducer;
  const salary = salaryReducer;
  const { isLoading } = serviceReducer;

  const content = SALARY_CONTENT[currentLang];
  const resultsKeys = Object.keys(
    SALARY_RESULTS
  ) as ISalaryResultsKeys[];
  return (
    <>
      {resultsKeys.map((key, i) => (
        <StyledTableRow key={key + i}>
          <StyledTableCell component='th' scope='row'>
            {content[key]}
          </StyledTableCell>

          <StyledTableCell align='right'>
            {isLoading ? <Skeleton /> : salary[key]}
          </StyledTableCell>
        </StyledTableRow>
      ))}
    </>
  );
}
