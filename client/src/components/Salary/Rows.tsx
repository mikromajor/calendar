import {
  StyledTableCell,
  StyledTableRow,
} from "./tableElementsTheme";
import { useAppSelector } from "../../store/hooks/redux";
import {
  ISalaryResultsKeys,
  ISalaryIntroductionKeys,
} from "../../types/salaryTypes";
import { SALARY_CONTENT } from "../../constants/salaryConstants";
import { TableInput } from "../ui";

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
  const { currentLang } = userReducer;
  const content = SALARY_CONTENT[currentLang];

  return (
    <>
      {salaryKeys.map((key, i) => (
        <StyledTableRow key={key + i}>
          <StyledTableCell component='th' scope='row'>
            {content[key]}
          </StyledTableCell>

          <StyledTableCell align='center'>
            {isInput ? (
              <TableInput salaryKey={key} />
            ) : (
              salaryReducer[key]
            )}
          </StyledTableCell>
        </StyledTableRow>
      ))}
    </>
  );
}
