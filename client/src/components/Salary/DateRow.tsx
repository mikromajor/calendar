import {
  StyledTableCell,
  StyledTableRow,
} from "./StyledElements";
import { useAppSelector } from "../../store/hooks/redux";
import { SALARY_CONTENT } from "../../constants/salaryConstants";
import { MobileCalendar } from "../ui";

export const DateRow = () => {
  const { currentLang } = useAppSelector(
    (store) => store.userReducer
  );

  const content = SALARY_CONTENT[currentLang];
  return (
    <StyledTableRow>
      <StyledTableCell component='th' scope='row'>
        {content.date}
      </StyledTableCell>
      <StyledTableCell>
        <MobileCalendar />
      </StyledTableCell>
    </StyledTableRow>
  );
};
