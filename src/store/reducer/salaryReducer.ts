import {
  // createAsyncThunk,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { INIT_SALARY_STATE } from "./constants/salaryConstants";
import {
  PayloadType,
  KeysInitSalaryState,
} from "./types/salaryTypes";
import {
  seekSavedStateInStorage,
  updateState,
} from "./salaryHandlers";

export const salaryReducer = createSlice({
  name: "salaryState",
  initialState: INIT_SALARY_STATE,
  reducers: {
    getSalaryForTheMonth: (
      state,
      action: PayloadAction<PayloadType>
    ) => {
      let isKey: string | undefined =
        seekSavedStateInStorage(state, action.payload);

      updateState(state, action.payload, isKey);
    },
  },
});

export default salaryReducer.reducer;
export const salaryActions = salaryReducer.actions;
