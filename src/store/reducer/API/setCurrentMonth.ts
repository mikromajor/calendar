import { AppDispatch } from "../..";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { getCurrentMonth } from "../handler/getCurrentMonth";

export const setCurrentMonth =
  (callback: ActionCreatorWithPayload<string, string>) =>
  async (dispatch: AppDispatch) => {
    const currentMonth =
      (await getCurrentMonth()) as unknown as string;
    dispatch(callback(currentMonth));
  };
