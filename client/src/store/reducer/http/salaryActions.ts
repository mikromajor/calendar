import { createAsyncThunk } from "@reduxjs/toolkit";
import { $host, $authHost } from "./host";
import {
  ISalaryInit,
  ISalaryDate,
  IPayload,
} from "../../../types/salaryTypes";
import { IServerRes } from "../../../types/userTypes";
import { calculateSalary } from "../salaryHandlers";

export const getOne = createAsyncThunk(
  "salary/getOne",
  async (
    date: ISalaryDate,
    { rejectWithValue, dispatch, getState }
  ) => {
    const { year, month } = date;
    try {
      const response = await $authHost.get<IServerRes>(
        `api/salary/getOne?year=${year}&month=${month}`
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
    payload: IPayload,
    { rejectWithValue, dispatch, getState }
  ) => {
    const oldSalary = getState() as ISalaryInit;
    const updatedSalary = calculateSalary(
      oldSalary,
      payload
    );

    try {
      const response = await $authHost.post<IServerRes>(
        "api/salary/save",
        updatedSalary
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
