import {
  amountWeekendsAndWeekdays,
  isNum,
  determExtraSalary,
  determStandardSalary,
} from ".";
import {
  IPayload,
  ISalaryInit,
} from "../../../types/salaryTypes";
//TODO план такий: якщо в пайлоад не має хворобових і урлопових, то  розрахунок зп відбувається на стороні клієнта після чого зберігається на сервер; якщо хворобові/урлопові є то летить запит на сервер де розраховується їх середня вартість
export const calculateSalary = (
  oldSalary: ISalaryInit,
  payload: IPayload
) => {
  const salary = { ...oldSalary };
  const {
    salaryRate,
    premiumUzn,
    premiumRate,
    taxRate,
    extraHours_50,
    extraHours_100,
    extraHours_120,
    holidays,
    sickLeaveWeekDays,
    sickLeaveWeekendDays,
    usedVacation,
    bloodDonation,
  } = payload;

  const { weekends, weekdays } = amountWeekendsAndWeekdays(
    salary.year,
    salary.month
  );

  isNum(salaryRate) && (salary.salaryRate = salaryRate);

  isNum(premiumRate) && (salary.premiumRate = premiumRate);

  isNum(premiumUzn) && (salary.premiumUzn = premiumUzn);

  isNum(taxRate) && (salary.taxRate = taxRate);

  isNum(sickLeaveWeekDays) &&
    (salary.sickLeaveWeekDays = sickLeaveWeekDays);
  isNum(sickLeaveWeekendDays) &&
    (salary.sickLeaveWeekendDays = sickLeaveWeekendDays);

  isNum(usedVacation) &&
    (salary.usedVacation = usedVacation);
  isNum(bloodDonation) &&
    (salary.bloodDonation = bloodDonation);
  isNum(holidays) && (salary.holidays = holidays);

  salary.weekDays =
    weekdays -
    salary.sickLeaveWeekDays -
    salary.holidays -
    salary.usedVacation -
    salary.bloodDonation;

  salary.weekendDays = weekends;

  isNum(extraHours_50) &&
    (salary.extraHours_50 = extraHours_50);

  isNum(extraHours_100) &&
    (salary.extraHours_100 = extraHours_100);

  isNum(extraHours_120) &&
    (salary.extraHours_120 = extraHours_120);

  salary.nettoPerHours =
    Math.round(
      salary.salaryRate * (1 - salary.taxRate / 100) * 100
    ) / 100;

  salary.standardWorkHours = salary.weekDays * 8;

  salary.standardSalary = determStandardSalary(salary);

  salary.extraSalary = determExtraSalary(salary);

  salary.totalSalary =
    salary.standardSalary + salary.extraSalary;
  return salary;
};
