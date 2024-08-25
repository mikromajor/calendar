import {
  StyledTableCell,
  StyledTableRow,
} from "./StyledElements";
import { useAppSelector } from "../../store/hooks/redux";
import { ISalaryResultsKeys } from "../../types/salaryTypes";
import {
  SALARY_CONTENT,
  SALARY_RESULTS,
} from "../../constants/salaryConstants";

export function ResultsRows() {
  const { currentLang } = useAppSelector(
    (store) => store.userReducer
  );
  const salary = useAppSelector(
    (store) => store.salaryReducer
  );
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
            {salary[key]}
          </StyledTableCell>
        </StyledTableRow>
      ))}
    </>
  );
}
