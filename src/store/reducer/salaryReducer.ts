import {
  // createAsyncThunk,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { SALARY_INIT } from "./constants/salaryConstants";
import { PayloadType } from "./types/salaryTypes";
import {
  changeDate,
  seekSavedSalaryInStorage,
  updateSalary,
  getKey,
  saveSalaryInStorage,
} from "./salaryHandlers";

export const salaryReducer = createSlice({
  name: "salaryState",
  initialState: SALARY_INIT,
  reducers: {
    getSalary: (
      state,
      action: PayloadAction<PayloadType>
    ) => {
      const dateKey = getKey(state.year, state.month);
      updateSalary(state, action.payload, dateKey);
      saveSalaryInStorage(state);
    },
    changeSalaryDate: (
      state,
      action: PayloadAction<PayloadType>
    ) => {
      changeDate(state, action.payload);

      const dateKey = getKey(state.year, state.month);

      seekSavedSalaryInStorage(state, dateKey);
    },
  },
});

export default salaryReducer.reducer;
export const salaryActions = salaryReducer.actions;
