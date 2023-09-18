import {
  UaKeys,
  KeysSalaryInit,
} from "../../store/reducer/types/salaryTypes";
import { useAppSelector } from "../../store/hooks/redux";
import { Input } from "../../ui";
import {
  TABLE_HEADINGS,
  INPUT_KEYS,
} from "../../store/reducer/constants/salaryConstants";

export const Salary = () => {
  const { salaryReducer } = useAppSelector(
    (state) => state
  );
  const tableRows = [];
  let td,
    i = 0;

  for (const salArr of Object.entries(salaryReducer)) {
    i++;
    let key = salArr[0] as string as KeysSalaryInit;
    let val = salArr[1];
    if (INPUT_KEYS.includes(key)) {
      td = (
        <td>
          <Input payloadsKey={key} />
        </td>
      );
    } else {
      td = <td> {val} </td>;
    }
    if (Object.hasOwn(TABLE_HEADINGS.ua, key)) {
      key = key as unknown as UaKeys;
      tableRows.push(
        <tr key={String(i) + key}>
          <th>{TABLE_HEADINGS.ua[key]}</th>
          {td}
        </tr>
      );
    }
  }

  return (
    <div className='salary'>
      <table>
        <caption>Salary</caption>
        <tbody>{tableRows}</tbody>
      </table>
    </div>
  );
};
