import { createAsyncThunk } from "@reduxjs/toolkit";
import { $host, $authHost } from "./host";
import { AxiosError, AxiosResponse } from "axios";
import { AlcoYear } from "../../../types/alcoTypes";
import { IUser, IServerRes } from "../../../types/appTypes";
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
    try {
      const response = await $authHost.get<IServerRes>(
        `api/alco_calendar/get?year=${date.year}`
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
