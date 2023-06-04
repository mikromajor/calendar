import {
  PayloadsKeys,
  UaKeys,
  Entries,
  SalaryInit,
} from "../../store/reducer/types/salaryTypes";
import { useAppSelector } from "../../store/hooks/redux";
import { Input } from "../../ui";
import { TABLE_HEADINGS } from "../../store/reducer/constants/salaryConstants";

export const Salary = () => {
  const { salaryReducer } = useAppSelector(
    (state) => state
  );
  const arr = [];
  for (const salArr of Object.entries(
    salaryReducer
  ) as Entries<SalaryInit>) {
    let key = salArr[0] as string as UaKeys;
    arr.push(
      <tr key={key}>
        <th>{TABLE_HEADINGS.ua[key]}</th>
        <td>
          {/* TODO */}
          <Input payloadsKey={PayloadsKeys.bloodDonation} />
        </td>
        <td>
          <Input payloadsKey={PayloadsKeys.year} />
        </td>
      </tr>
    );
  }

  return (
    <div className='salary'>
      <table>
        <caption>Salary</caption>
        {/* {TABLE_HEADINGS.map((heading, i) => (
          <tr key={heading + String(i)}>
            <th>{heading}</th>
            <td>
              <Input
                payloadsKey={PayloadsKeys.bloodDonation}
              />
            </td>
            <td>
              <Input payloadsKey={PayloadsKeys.year} />
            </td>
          </tr>
        ))} */}

        <td> {salaryReducer.weekDays} </td>

        <td>{salaryReducer.weekendDays}</td>
        <td> {salaryReducer.standardWorkHours}</td>
        <td>{salaryReducer.standardSalary}</td>
        <td>{salaryReducer.extraSalary}</td>
        <td className='salary-all'>
          {salaryReducer.totalSalary}
        </td>
      </table>
    </div>
  );
};
