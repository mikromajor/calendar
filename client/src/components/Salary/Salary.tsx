import { useAppSelector } from "../../store/hooks/redux";
import { Input } from "./ui";
import {
  SALARY_CONTENT,
  NO_INPUTS,
  SALARY_KEYS,
} from "../../constants/salaryConstants";

export const Salary = () => {
  const { salaryReducer, userReducer } = useAppSelector(
    (state) => state
  );

  const { currentLang, currentTheme } = userReducer;

  const tr: JSX.Element[] = [];
  let td: JSX.Element;
  let th: JSX.Element;
  // add compatibility V1 & V2

  SALARY_KEYS.forEach((key, i) => {
    td = NO_INPUTS.includes(key) ? (
      <td
        className={`salary__td-no-inputs salary__td-no-inputs--${currentTheme}`}
      >
        {salaryReducer[key]}
      </td>
    ) : (
      <td
        className={`salary__td salary__td--${currentTheme}`}
      >
        <Input payloadsKey={key} />
      </td>
    );
    th = (
      <th
        className={`salary__th salary__th--${currentTheme}`}
      >
        {SALARY_CONTENT?.[currentLang]?.[key]}
      </th>
    );

    tr.push(
      <tr
        className={`salary__tr salary__tr--${currentTheme}`}
        key={String(i) + key}
      >
        {th}
        {td}
      </tr>
    );
  });

  return (
    <div className='salary'>
      <table
        className={`salary__tabel salary__tabel--${currentTheme}`}
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
