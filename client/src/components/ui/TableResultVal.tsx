import { StyledTableCell } from "../Salary/tableElementsTheme";
import { ISalaryInit } from "../../types/salaryTypes";
import { useAppSelector } from "../../store/hooks/redux";

interface ITableResultValProps {
  keyWord: keyof ISalaryInit;
}

export const TableResultVal = ({
  keyWord,
}: ITableResultValProps) => {
  const salaryResultValue = useAppSelector(
    (store) => store.salaryReducer[keyWord]
  );
  console.log(keyWord, salaryResultValue);
  return (
    <StyledTableCell align='left'>
      {salaryResultValue}
    </StyledTableCell>
  );
};
