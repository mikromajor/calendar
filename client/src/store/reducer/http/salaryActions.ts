import { createAsyncThunk } from "@reduxjs/toolkit";
import { $host, $authHost } from "./host";
import { ISalaryInit } from "../../../types/salaryTypes";
import { IServerRes } from "../../../types/userTypes";
import { IDose } from "../../../types/alcoTypes";
import {
  CurrentDate,
  AlcoState,
} from "../../../types/alcoTypes";

export const getSalary = createAsyncThunk(
  "salary/getOne",
  async (
    date: CurrentDate,
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

// export const addNewDoseToDB = createAsyncThunk(
//   "alcoCalc/addNewDoseToDB",
//   async (
//     newDose: IDose,
//     { rejectWithValue, dispatch, getState }
//   ) => {
//     try {
//       const response = await $authHost.post<IServerRes>(
//         "api/alco_calendar/add",
//         newDose
//       );

//       return response.data;
//     } catch (error: any) {
//       if (!error.response) {
//         throw error;
//       }
//       return rejectWithValue(
// "Server not responding. Salary data not update"
// );
//     }
//   }
// );
