import { KeysLang } from "../../store/reducer/types/salaryTypes";
import {
  useAppSelector,
  useAppDispatch,
} from "../../store/hooks/redux";
import { Input } from "./ui";
import {
  SALARY_CONTENT,
  NO_INPUTS,
  SALARY_KEYS,
  ALL_LNGS,
} from "../../store/reducer/constants/salaryConstants";
import { salaryActions } from "../../store/reducer/salaryReducer";

export const Salary = () => {
  const salaryReducer = useAppSelector(
    (state) => state.salaryReducer
  );
  const dispatch = useAppDispatch();
  const { changeLanguage } = salaryActions;
  const tableRows: JSX.Element[] = [];
  let td: JSX.Element;
  let th: JSX.Element;
  const language =
    salaryReducer.currentLanguage as KeysLang;

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

  const Options = ALL_LNGS.map((lng, i) => (
    <option key={lng + i} value={lng}>
      {lng}
    </option>
  ));

  const langsRow = (
    <tr>
      <th>{SALARY_CONTENT[language].changeLanguage}</th>
      <td>
        {" "}
        <select
          defaultValue={language}
          onChange={(e) => {
            dispatch(
              changeLanguage(
                e.currentTarget.value as KeysLang
              )
            );
          }}
        >
          {Options}
        </select>
      </td>
    </tr>
  );

  return (
    <div className='salary'>
      <table>
        <caption>{SALARY_CONTENT[language].header}</caption>
        <tbody>
          {langsRow}
          {tableRows}
        </tbody>
      </table>
    </div>
  );
};
