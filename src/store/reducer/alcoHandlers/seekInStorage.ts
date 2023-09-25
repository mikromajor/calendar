import {
  InitialAlcoState,
  Payload,
} from "../types/alcoTypes";
import { PayloadAction } from "@reduxjs/toolkit";
import { createKey } from "./.";

export const seekInStorage = (
  state: InitialAlcoState,
  action: PayloadAction<Payload>
) => {
  const key = createKey(state.month, state.year);
  try {
    const isStoreData = window.localStorage.getItem(key);
    if (isStoreData) {
      const {
        totalVodkaPerMonth,
        totalClearAlcoholPerMonth,
        totalVodkaPerYear,
        totalClearAlcoholPerYear,
      } = JSON.parse(
        isStoreData
      ) as unknown as InitialAlcoState;
      state.totalVodkaPerMonth = totalVodkaPerMonth;
      state.totalClearAlcoholPerMonth =
        totalClearAlcoholPerMonth;
      state.totalVodkaPerYear = totalVodkaPerYear;
      state.totalClearAlcoholPerYear =
        totalClearAlcoholPerYear;
    } else {
      state.totalVodkaPerMonth = 0;
      state.totalClearAlcoholPerMonth = 0;
    }
  } catch {
    throw Error("Problem with parsing alcoData");
  }
};
