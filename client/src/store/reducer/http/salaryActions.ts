import { createAsyncThunk } from "@reduxjs/toolkit";
import { $host, $authHost } from "./host";
import {
  ISalaryInit,
  ISalaryDate,
} from "../../../types/salaryTypes";
import { IServerRes } from "../../../types/userTypes";

export const getSalary = createAsyncThunk(
  "salary/getSalary",
  async (
    salaryDate: ISalaryDate,
    { rejectWithValue, dispatch, getState }
  ) => {
    const { year, month } = salaryDate;
    try {
      const response = await $authHost.get<IServerRes>(
        `api/salary/getSalary?year=${year}&month=${month}`
      );

      return response.data;
    } catch (error: any) {
      if (error?.response) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue(
        "Server not responding. Salary data not received"
      );
    }
  }
);

export const saveSalaryToDB = createAsyncThunk(
  "salary/saveSalaryToDB",
  async (
    salary: ISalaryInit,
    { rejectWithValue, dispatch, getState }
  ) => {
    try {
      const response = await $authHost.post<IServerRes>(
        "api/salary/save",
        salary
      );

      return response.data;
    } catch (error: any) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(
        "Server not responding. Salary data not update"
      );
    }
  }
);

export const changeVacation = createAsyncThunk(
  "salary/changeVacation",
  async (
    salary: ISalaryInit,
    { rejectWithValue, dispatch, getState }
  ) => {
    try {
      const response = await $authHost.post<IServerRes>(
        "api/salary/changeVacation",
        salary
      );

      return response.data;
    } catch (error: any) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(
        "Server not responding. Salary vacation data not update"
      );
    }
  }
);
