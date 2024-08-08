import { createAsyncThunk } from "@reduxjs/toolkit";
import { $host, $authHost } from "./host";
import { AxiosError, AxiosResponse } from "axios";
import { YearInfo } from "../../../types/alcoTypes";
import { IUser, IServerRes } from "../../../types/appTypes";

export const fetchAlcoYear = createAsyncThunk(
  "alcoCalc/fetchAlcoYear",
  async (
    year: string,
    { rejectWithValue, dispatch, getState }
  ) => {
    try {
      const response = await $authHost.get<IServerRes>(
        `api/alco_calendar/get?year=${year}`
      );
      // dispatch();
      return response.data;
    } catch (error: any) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);
