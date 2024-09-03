import { createAsyncThunk } from "@reduxjs/toolkit";
import { $host, $authHost } from "./host";
import {
  ISalaryDate,
  IPayload,
} from "../../../types/salaryTypes";
import { IServerRes } from "../../../types/userTypes";

// model ServerRes {
//   user?:{token:string; message:string // for userInfo};
//   message?: string; //for error
//   alcoState?: AlcoState;
//   salary?: ISalaryInit;
// }

export const getSalary = createAsyncThunk(
  "salary/getSalary",
  async (
    salaryDate: ISalaryDate,
    { rejectWithValue, dispatch, getState }
  ) => {
    const { year, month } = salaryDate;
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

export const serverSalaryCalculate = createAsyncThunk(
  "salary/serverSalaryCalculate",
  async (
    payload: IPayload,
    { rejectWithValue, dispatch, getState }
  ) => {
    try {
      const response = await $authHost.post<IServerRes>(
        "api/salary/calculate",
        payload
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
