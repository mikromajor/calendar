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
    date: ISalaryDate,
    { rejectWithValue, dispatch, getState }
  ) => {
    const { year, month } = date;
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
