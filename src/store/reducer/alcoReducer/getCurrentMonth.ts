import { AppDispatch } from "../..";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";

const getM = async () => new Date().getMonth().toString();

export const getCurrentMonth =
  (callback: ActionCreatorWithPayload<string, string>) =>
  async (dispatch: AppDispatch) => {
    const currentMonth =
      (await getM()) as unknown as string;
    dispatch(callback(currentMonth));
  };
