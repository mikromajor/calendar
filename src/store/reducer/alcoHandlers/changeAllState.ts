import { AlcoState } from "../types/alcoTypes";

export const changeAllState = (
  state: AlcoState,
  newData: AlcoState
) => {
  (Object.keys(state) as (keyof AlcoState)[]).forEach(
    (key, index) => {
      // state[key]
    }
  );
};
