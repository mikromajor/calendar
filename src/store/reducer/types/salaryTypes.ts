import { INIT_SALARY_STATE } from "../constants/salaryConstants";

export type InitSalaryState = typeof INIT_SALARY_STATE;

export type PayloadType = {
  extraHours: number;
  usersMonth: number;
  usersYear: number;
};
