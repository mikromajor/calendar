import { StateType } from "../types/alcoTypes";
import { createKey } from "./.";

export const saveDataInStorage = (state: StateType) => {
  const currentDataKey = createKey(state.month, state.year);
  window.localStorage.setItem(
    currentDataKey,
    JSON.stringify(state)
  );
};
