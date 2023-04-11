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
  getSalaryInit,
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
      const dateKey = getKey(state.year, state.month);
      changeDate(state, action.payload);
      // getSalaryInit(state);
      seekSavedSalaryInStorage(state, dateKey); // need middleware
    },
  },
});

export default salaryReducer.reducer;
export const salaryActions = salaryReducer.actions;
