import {
  StyledTableCell,
  StyledTableRow,
} from "./StyledElements";
import { useAppSelector } from "store/hooks/redux";
import { ISalaryInputsKeys } from "types/salaryTypes";
import {
  SALARY_CONTENT,
  SALARY_INPUTS,
} from "constants/salaryConstants";
import { TableInput } from "../ui";

export function InputRows() {
  const { currentLang } = useAppSelector(
    (store) => store.userReducer
  );
  const content = SALARY_CONTENT[currentLang];
  const inputsKeys = Object.keys(
    SALARY_INPUTS
  ) as ISalaryInputsKeys[];

  return (
    <>
      {inputsKeys.map((key, i) => (
        <StyledTableRow key={key + i}>
          <StyledTableCell component='th' scope='row'>
            {content[key]}
          </StyledTableCell>

          <TableInput keyWord={key} />
        </StyledTableRow>
      ))}
    </>
  );
}
