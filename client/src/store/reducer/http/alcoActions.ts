import { createAsyncThunk } from "@reduxjs/toolkit";
import { $host, $authHost } from "./host";
import { AxiosError, AxiosResponse } from "axios";
import { AlcoYear } from "../../../types/alcoTypes";
import { IServerRes } from "../../../types/appTypes";
import { IDose } from "../../../types/alcoTypes";
import {
  CurrentDate,
  AlcoState,
} from "../../../types/alcoTypes";

export const fetchAlcoYear = createAsyncThunk(
  "alcoCalc/fetchAlcoYear",
  async (
    date: CurrentDate,
    { rejectWithValue, dispatch, getState }
  ) => {
    const { year, month, day } = date;
    try {
      const response = await $authHost.get<IServerRes>(
        `api/alco_calendar/get?year=${year}&month=${month}&day=${day}`
      );

      return response.data;
    } catch (error: any) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const addNewDose = createAsyncThunk(
  "alcoCalc/addNewDose",
  async (
    newDose: IDose,
    { rejectWithValue, dispatch, getState }
  ) => {
    try {
      const response = await $authHost.post<IServerRes>(
        "api/alco_calendar/add",
        newDose
      );

      return response.data;
    } catch (error: any) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);
