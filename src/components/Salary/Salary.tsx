import { PayloadsKeys } from "../../store/reducer/types/salaryTypes";
import { useAppSelector } from "../../store/hooks/redux";
import { Input, TableHeadings } from "../../ui";

export const Salary = () => {
  const { salaryReducer } = useAppSelector(
    (state) => state
  );

  return (
    <div className='salary'>
      <table>
        <caption>Salary</caption>
        <TableHeadings />
        <tr>
          <td>
            <Input payloadsKey={PayloadsKeys.year} />
          </td>
          <td>
            <Input payloadsKey={PayloadsKeys.month} />
          </td>
          <td>
            <Input payloadsKey={PayloadsKeys.salaryRate} />
          </td>
          <td>
            <Input payloadsKey={PayloadsKeys.taxRate} />
          </td>
          <td>
            <Input payloadsKey={PayloadsKeys.premiumRate} />
          </td>
          <td> {salaryReducer.weekDays} </td>
          <td>{salaryReducer.weekendDays}</td>
          <td>
            <Input payloadsKey={PayloadsKeys.holidays} />
          </td>
          <td> {salaryReducer.standardWorkHours}</td>
          <td>
            <Input
              payloadsKey={PayloadsKeys.extraHours_50}
            />
          </td>
          <td>
            <Input
              payloadsKey={PayloadsKeys.extraHours_100}
            />
          </td>
          <td>
            <Input
              payloadsKey={PayloadsKeys.sickLeaveWeekDays}
            />
          </td>
          <td>
            <Input
              payloadsKey={
                PayloadsKeys.sickLeaveWeekendDays
              }
            />
          </td>
          <td>
            <Input
              payloadsKey={PayloadsKeys.usedVacation}
            />
          </td>
          <td>
            <Input
              payloadsKey={PayloadsKeys.bloodDonation}
            />
          </td>
          <td>{salaryReducer.standardSalary}</td>
          <td>{salaryReducer.extraSalary}</td>
          <td className='salary-all'>
            {salaryReducer.totalSalary}
          </td>
        </tr>
      </table>
    </div>
  );
};
