import { AlcoState } from "../types/alcoTypes";
import { createKey } from ".";

export const saveStateInStorage = (state: AlcoState) =>
  window.localStorage.setItem(
    createKey(state.currentYear),
    JSON.stringify(state)
  );
