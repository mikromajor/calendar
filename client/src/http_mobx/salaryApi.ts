import { $authHost, $host } from "./index";
import { SalaryInit } from "../types/salaryTypes";

interface IDose {
  year: string;
  month: string;
  day: string;
  additionVodka: string;
}

export const addSalary = async (salary: SalaryInit) => {
  //POST http://localhost:7000/api/salary/add
  // add body {
  // "month": "1",
  // "year": "2020",
  // "salaryRate": "20",
  // "premiumRate": "30",
  // "premiumUzn": "0",
  // "taxRate": "27",
  // "nettoPerHours": "14",
  // "weekDays": "22",
  // "weekendDays": "9",
  // "standardWorkHours": "176",
  // "extraHours_50": "0",
  // "extraHours_100": "0",
  // "extraHours_120": "0",
  // "sickLeaveWeekDays": "0",
  // "sickLeaveWeekendDays": "0",
  // "holidays": "0",
  // "usedVacation": "0",
  // "bloodDonation": "0",
  // "standardSalary": "3200",
  // "extraSalary": "1200",
  // "totalSalary": "4400"
  // }
  const { data } = await $authHost.post(
    "api/salary/add",
    salary
  );
  return data;
};

export const getOneSalary = async (
  year: string,
  month: string
) => {
  //GET http://localhost:7000/api/salary/getOne?year=2020&month=1
  const { data } = await $host.get(
    `api/salary/getOne?year=${year}&month=${month}`
  );
  return data;
};

export const getAllSalary = async () => {
  //GET http://localhost:7000/api/salary/getAll
  const { data } = await $host.get("api/salary/getAll");
  return data;
};

export const getSalForTwoYear = async (year: string) => {
  //GET http://localhost:7000/api/salary/getLast_2years?year=2020
  const { data } = await $host.get(
    `api/salary/getLast_2years?year=${year}`
  );
  return data;
};
