import { SALARY_INIT } from "../constants/salaryConstants";

export type SalaryInit = typeof SALARY_INIT;

export type KeysSalaryInit = keyof SalaryInit;

export type PayloadType = {
  month?: number;
  year?: number;

  salaryRate?: number;
  premiumRate?: number;
  taxRate?: number;

  extraHours_50?: number;
  extraHours_100?: number;

  sickLeaveWeekDays?: number;
  sickLeaveWeekendDays?: number;

  holidays?: number;
  usedVacation?: number;
  bloodDonation?: number;
};

export enum PayloadsKeys {
  extraHours_50 = "extraHours_50",
  extraHours_100 = "extraHours_100",

  salaryRate = "salaryRate",
  premiumRate = "premiumRate",
  taxRate = "taxRate",

  month = "month",
  year = "year",

  sickLeaveWeekendDays = "sickLeaveWeekendDays",
  sickLeaveWeekDays = "sickLeaveWeekDays",

  holidays = "holidays",
  usedVacation = "usedVacation",
  bloodDonation = "bloodDonation",
}

// TS PICK & OMIT EXAMPLE:

//  type Payload = {
//   extraHours: number;
//   Month: number;
//   Year: number;
// };

// type removeField = Omit<Payload, 'userMonth'|'userYear'>

// type addField = Pick<Payload, 'extraHours'>&{salary:number} // left extraHours and add salary
