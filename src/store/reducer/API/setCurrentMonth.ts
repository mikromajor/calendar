import { AppDispatch } from "../..";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { getCurrentMonth } from "../alcoHandlers/getCurrentMonth";

export const setCurrentMonth =
  (callback: ActionCreatorWithPayload<string, string>) =>
  async (dispatch: AppDispatch) => {
    const currentMonth = await getCurrentMonth();
    dispatch(callback(currentMonth));
  };
