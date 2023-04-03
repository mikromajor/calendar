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
  getStorageData,
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
      const isStorage = getStorageData(
        state,
        action.payload
      );

      !isStorage && updateState(state, action.payload);
    },
  },
});

export default salaryReducer.reducer;
export const salaryActions = salaryReducer.actions;
