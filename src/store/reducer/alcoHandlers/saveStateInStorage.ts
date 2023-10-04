import { AlcoState } from "../types/alcoTypes";
import { createKey } from ".";

export const saveStateInStorage = (state: AlcoState) => {
  const currentDataKey = createKey(state.currentYear);
  window.localStorage.setItem(
    currentDataKey,
    JSON.stringify(state)
  );
};
