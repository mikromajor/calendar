import {
  useAppSelector,
  useAppDispatch,
} from "../../store/hooks/redux";
import { salaryActions } from "../../store/reducer/salaryReducer";

export const Salary = () => {
  const { salaryReducer } = useAppSelector(
    (state) => state
  );
  const { getSalaryForTheMonth } = salaryActions;
  const dispatch = useAppDispatch();
  const {
    year,
    month,
    salaryRate,
    taxRate,
    premiumRate,
    weekDays,
    weekendDays,
    standardWorkHours,
    extraHours_50,
    extraHours_100,
    sickLeave,
    usedVacation,
    bloodDonation,
    standardSalary,
    extraSalary,
    totalSalary,
  } = salaryReducer;

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
            <th>К-ть робочих годин</th>
            <th>Понаднормові 50%</th>
            <th>Понаднормові 100%</th>
            <th>Хворобові</th>
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
              <input
                placeholder={String(year)}
                type='number'
                onChange={(e) => {
                  const val = Number(e.currentTarget.value);
                  dispatch(
                    getSalaryForTheMonth({ usersYear: val })
                  );
                }}
              />
            </td>
            <td>{month}</td>
            <td>{salaryRate}</td>
            <td>{taxRate}</td>
            <td>{premiumRate}</td>
            <td>{weekDays}</td>
            <td>{weekendDays}</td>
            <td>{standardWorkHours}</td>
            <td>{extraHours_50}</td>
            <td>{extraHours_100}</td>
            <td>{sickLeave}</td>
            <td>{usedVacation}</td>
            <td>{bloodDonation}</td>
            <td>{standardSalary}</td>
            <td>{extraSalary}</td>
            <td>{totalSalary}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
