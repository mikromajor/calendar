import { useAppSelector } from "../../store/hooks/redux";
import { Input, LangsRow } from "./ui";
import {
  SALARY_CONTENT,
  NO_INPUTS,
  SALARY_KEYS,
} from "../../store/reducer/constants/salaryConstants";

export const Salary = () => {
  const salaryReducer = useAppSelector(
    (state) => state.salaryReducer
  );

  const tableRows: JSX.Element[] = [];
  let td: JSX.Element;
  let th: JSX.Element;
  // add compatibility V1 & V2
  const language = !!salaryReducer?.currentLanguage
    ? salaryReducer.currentLanguage
    : "EN";

  SALARY_KEYS.forEach((key, i) => {
    if (key !== "currentLanguage") {
      td = NO_INPUTS.includes(key) ? (
        <td> {salaryReducer[key]} </td>
      ) : (
        <td>
          <Input payloadsKey={key} />
        </td>
      );
      th = <th>{SALARY_CONTENT?.[language]?.[key]}</th>;
    }

    tableRows.push(
      <tr key={String(i) + key}>
        {th}
        {td}
      </tr>
    );
  });

  return (
    <div className='salary'>
      <table>
        <caption>{SALARY_CONTENT[language].header}</caption>
        <tbody>
          <LangsRow />
          {tableRows}
        </tbody>
      </table>
    </div>
  );
};
