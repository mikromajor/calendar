import {
  // createAsyncThunk,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { SALARY_INIT } from "./constants/salaryConstants";
import { PayloadType } from "./types/salaryTypes";
import {
  checkDate,
  seekSavedSalaryInStorage,
  updateSalary,
  getKey,
} from "./salaryHandlers";

export const salaryReducer = createSlice({
  name: "salaryState",
  initialState: SALARY_INIT,
  reducers: {
    getSalary: (
      state,
      action: PayloadAction<PayloadType>
    ) => {
      let dateKey = "";
      if (checkDate(state, action.payload)) {
        dateKey = getKey(state);
        seekSavedSalaryInStorage(state, dateKey);
      }
      updateSalary(state, action.payload, dateKey);
    },
  },
});

export default salaryReducer.reducer;
export const salaryActions = salaryReducer.actions;
