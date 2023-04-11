import { PayloadsKeys } from "../../store/reducer/types/salaryTypes";
import { useAppSelector } from "../../store/hooks/redux";
import { Input } from "../../ui";

export const Salary = () => {
  const { salaryReducer } = useAppSelector(
    (state) => state
  );

  return (
    <>
      <h1>Salary</h1>

      <table>
        <thead>
          <tr>
            <th>Рік</th>
            <th>Місяць</th>
            <th>Ставка</th>
            <th>Податок</th>
            <th>Премія</th>
            <th>Будні</th>
            <th>Вихідні</th>
            <th>Святкові</th>
            <th>К-ть робочих годин</th>
            <th>Понаднормові 50%</th>
            <th>Понаднормові 100%</th>
            <th>Хворобові в будні</th>
            <th>Хворобові в вихідні</th>
            <th>Відпустка</th>
            <th>Кроводавство</th>
            <th>ЗП нормова</th>
            <th>ЗП понаднормова</th>
            <th>ЗП вся</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Input payloadsKey={PayloadsKeys.year} />
            </td>
            <td>
              <Input payloadsKey={PayloadsKeys.month} />
            </td>
            <td>
              <Input
                payloadsKey={PayloadsKeys.salaryRate}
              />
            </td>
            <td>
              <Input payloadsKey={PayloadsKeys.taxRate} />
            </td>
            <td>
              <Input
                payloadsKey={PayloadsKeys.premiumRate}
              />
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
            <td>{salaryReducer.totalSalary}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
