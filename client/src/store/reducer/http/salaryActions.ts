import { createAsyncThunk } from "@reduxjs/toolkit";
import { $host, $authHost } from "./host";
import {
  ISalaryDate,
  IPayload,
} from "../../../types/salaryTypes";
import { IServerRes } from "../../../types/userTypes";
import { serviceActions } from "../serviceReducer";

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
      const res = await $authHost.get<IServerRes>(
        `api/salary/getOne?year=${year}&month=${month}`
      );
      let message = res.data?.message;
      dispatch(
        serviceActions.responseOk(message ? message : "")
      );
      return res.data;
    } catch (error: any) {
      let eRespons = error?.respons;
      dispatch(
        serviceActions.responseReject(
          eRespons ? eRespons.data : error
        )
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
      const res = await $authHost.post<IServerRes>(
        "api/salary/calculate",
        payload
      );
      let message = res.data?.message;
      dispatch(
        serviceActions.responseOk(message ? message : "")
      );
      return res.data;
    } catch (error: any) {
      let eRespons = error?.respons;
      dispatch(
        serviceActions.responseReject(
          eRespons ? eRespons.data : error
        )
      );
      // if (!error.res) {
      //   throw error;
      // }
      // return rejectWithValue(
      //   "Server not responding. Salary vacation data not update"
      // );
    }
  }
);
