import {
  KeysSalaryInit,
  KeysLang,
} from "../../store/reducer/types/salaryTypes";
import { useAppSelector } from "../../store/hooks/redux";
import { Input } from "./ui";
import {
  TABLE_HEADINGS,
  NO_INPUTS,
  ALL_LANGS,
  SALARY_KEYS,
} from "../../store/reducer/constants/salaryConstants";

export const Salary = () => {
  const { salaryReducer } = useAppSelector(
    (state) => state
  );
  const tableRows: JSX.Element[] = [];
  let td: JSX.Element;
  let th: JSX.Element;
  const language =
    salaryReducer.currentLanguage as KeysLang;

  SALARY_KEYS.forEach((key, i) => {
    td = NO_INPUTS.includes(key) ? (
      <td> {salaryReducer[key]} </td>
    ) : (
      <td>
        <Input payloadsKey={key} />
      </td>
    );
    if (key !== "currentLanguage") {
      th = <th>{TABLE_HEADINGS?.[language]?.[key]}</th>;
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
        <caption>Salary</caption>
        <tbody>{tableRows}</tbody>
      </table>
    </div>
  );
};
