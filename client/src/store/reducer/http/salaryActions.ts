import { createAsyncThunk } from "@reduxjs/toolkit";
import { $host, $authHost } from "./host";
import {
  ISalaryDate,
  IPayload,
} from "../../../types/salaryTypes";
import { IServerRes } from "../../../types/userTypes";
import { serviceActions } from "../serviceReducer";
import { ERROR } from "../../../constants/serviceConstants";

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
      return res.data.salary;
    } catch (error: any) {
      let message = error?.response?.data?.message;
      dispatch(
        serviceActions.responseReject(
          message ? message : ERROR.noResponse
        )
      );
      console.log("Server error: ", error);
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
      return res.data.salary;
    } catch (error: any) {
      let message = error?.response?.data?.message;
      dispatch(
        serviceActions.responseReject(
          message ? message : ERROR.noResponse
        )
      );
      console.log("Server error: ", error);
    }
  }
);
