import {
  SALARY_CONTENT,
  LANGS,
} from "../../../../store/reducer/constants/salaryConstants";
import {
  useAppSelector,
  useAppDispatch,
} from "../../../../store/hooks/redux";
import { Langs } from "../../../../store/reducer/types/salaryTypes";
import { salaryActions } from "../../../../store/reducer/salaryReducer";

export const LangsRow = () => {
  // add compatibility V1 & V2
  const language = useAppSelector((state) =>
    !!state.salaryReducer?.currentLanguage
      ? state.salaryReducer?.currentLanguage
      : "EN"
  );
  const dispatch = useAppDispatch();

  const { changeLanguage } = salaryActions;

  const Options = LANGS.map((lng, i) => (
    <option key={lng + i} value={lng}>
      {lng}
    </option>
  ));

  return (
    <tr>
      <th>
        <label htmlFor='lang'>
          {SALARY_CONTENT[language].changeLanguage}
        </label>
      </th>
      <td>
        {" "}
        <select
          id={"lang"}
          defaultValue={language}
          onChange={(e) => {
            dispatch(
              changeLanguage(e.currentTarget.value as Langs)
            );
          }}
        >
          {Options}
        </select>
      </td>
    </tr>
  );
};
