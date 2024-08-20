import { createAsyncThunk } from "@reduxjs/toolkit";
import { $host, $authHost } from "./host";
import { ISalaryInit } from "../../../types/salaryTypes";
import { IServerRes } from "../../../types/userTypes";
import { IDose } from "../../../types/alcoTypes";
import {
  CurrentDate,
  AlcoState,
} from "../../../types/alcoTypes";
//TODO create Salary actions
// export const getAlcoYear = createAsyncThunk(
//   "alcoCalc/getAlcoYear",
//   async (
//     date: CurrentDate,
//     { rejectWithValue, dispatch, getState }
//   ) => {
//     const { year, month, day } = date;
//     try {
//       const response = await $authHost.get<IServerRes>(
//         `api/alco_calendar/get?year=${year}&month=${month}&day=${day}`
//       );

//       return response.data;
//     } catch (error: any) {
//       if (error?.response) {
//         return rejectWithValue(error.response.data);
//       }
//       return error;
//     }
//   }
// );

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
//       return rejectWithValue(error.response.data);
//     }
//   }
// );
