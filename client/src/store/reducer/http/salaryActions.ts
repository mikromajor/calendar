import { createAsyncThunk } from "@reduxjs/toolkit";
import { $host, $authHost } from "./host";
import {
  ISalaryInit,
  ISalaryDate,
  ISalaryInputs,
} from "../../../types/salaryTypes";
import { IServerRes } from "../../../types/userTypes";
import { IDose } from "../../../types/alcoTypes";

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

export const calculateSalary = createAsyncThunk(
  "salary/calculateSalary",
  async (
    newSalaryData: ISalaryInputs,
    { rejectWithValue, dispatch, getState }
  ) => {
    const oldSalaryState = getState() as ISalaryInit;
    const needCalculate = {
      ...oldSalaryState,
      ...newSalaryData,
    };
    try {
      const response = await $authHost.post<IServerRes>(
        "api/salary/calculate",
        needCalculate
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
