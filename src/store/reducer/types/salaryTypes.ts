import { SALARY_INIT } from "../constants/salaryConstants";

export type SalaryInit = typeof SALARY_INIT;

export type KeysSalaryInit = keyof SalaryInit;

export type PayloadType = {
  workedExtraHours_50?: number;
  workedExtraHours_100?: number;

  usersSalaryRate?: number;
  usersPremiumRate?: number;
  usersTaxRate?: number;

  usersMonth?: number;
  usersYear?: number;

  sickLeave?: number;
  usedVacation?: number;
  bloodDonation?: number;
};
export type PayloadsKey = keyof PayloadType;
// TS PICK & OMIT EXAMPLE:

// export type Payload = {
//   extraHours: number;
//   usersMonth: number;
//   usersYear: number;
// };

// type removeField = Omit<Payload, 'userMonth'|'userYear'>

// type addField = Pick<Payload, 'extraHours'>&{salary:number} // left extraHours and add salary
