import { useAppSelector } from "../../store/hooks/redux";
import { Input } from "./ui";
import {
  SALARY_CONTENT,
  NO_INPUTS,
  SALARY_KEYS,
} from "../../constants/salaryConstants";

export const Salary = () => {
  const { salaryReducer, appReducer } = useAppSelector(
    (state) => state
  );

  const { currentLang, currentTheme } = appReducer;

  const tr: JSX.Element[] = [];
  let td: JSX.Element;
  let th: JSX.Element;
  // add compatibility V1 & V2

  SALARY_KEYS.forEach((key, i) => {
    td = NO_INPUTS.includes(key) ? (
      <td data-no-input> {salaryReducer[key]} </td>
    ) : (
      <td>
        <Input payloadsKey={key} />
      </td>
    );
    th = <th>{SALARY_CONTENT?.[currentLang]?.[key]}</th>;

    tr.push(
      <tr key={String(i) + key}>
        {th}
        {td}
      </tr>
    );
  });

  return (
    <div className='salary'>
      <table
        className={`salary__tabel salary_tabel--${currentTheme}`}
      >
        <caption
          className={`salary__header salary__header--${currentTheme}`}
        >
          {SALARY_CONTENT[currentLang].header}
        </caption>
        <tbody>{tr}</tbody>
      </table>
    </div>
  );
};
