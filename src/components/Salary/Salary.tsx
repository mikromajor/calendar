import {
  useAppSelector,
  useAppDispatch,
} from "../../store/hooks/redux";
import { salaryActions } from "../../store/reducer/salaryReducer";

export const Salary = () => {
  const { salaryReducer } = useAppSelector(
    (state) => state
  );
  const {
    month,
    year,
    salaryRate,
    taxRate,
    premiumRate,
    weekDays,
    weekendDays,
    usedVacation,
    bloodDonation,
    standardSalary,
    extraSalary,
    totalSalary,
  } = salaryReducer;
  const standardSal = standardSalary();
  const extraSal = extraSalary();
  const totalSal = totalSalary();

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
            <th>ЗП</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{month}</td>
            <td>{year}</td>
            <td>{salaryRate}</td>
            <td>{taxRate}</td>
            <td>{premiumRate}</td>
            <td>{weekDays}</td>
            <td>{weekendDays}</td>
            <td>{usedVacation}</td>
            <td>{bloodDonation}</td>
            <td>{standardSal}</td>
            <td>{extraSal}</td>
            <td>{totalSal}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
