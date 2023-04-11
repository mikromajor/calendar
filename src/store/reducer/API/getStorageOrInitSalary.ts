import { AppDispatch } from "../..";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { getKey } from "../salaryHandlers";
import {
  SalaryInit,
  PayloadType,
} from "../types/salaryTypes";
import { SALARY_INIT } from "../constants/salaryConstants";

export const getStorageOrInitSalary =
  (
    callback: ActionCreatorWithPayload<string, string>,
    state: SalaryInit,
    payload: PayloadType
  ) =>
  async (dispatch: AppDispatch) => {
    let stor = "";
    let newMonth = payload.month
      ? payload.month
      : state.month;
    let newYear = payload.year ? payload.year : state.year;
    const key = getKey(newYear, newMonth);
    const item = window.localStorage.getItem(key);
    if (item) {
      stor = await JSON.parse(item);
    }
    dispatch(callback(stor));
  };

// TODO роздуплись шо передавать в колбек
