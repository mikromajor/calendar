import {
  // createAsyncThunk,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { SALARY_INIT } from "../../constants/salaryConstants";
import {
  PayloadType,
  Langs,
} from "../../types/salaryTypes";
import {
  changeDate,
  updateStateUsingStore,
  calculateSalary,
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
      calculateSalary(state, action.payload);
      saveSalaryInStorage(state);
    },
    changeSalaryDate: (
      state,
      action: PayloadAction<PayloadType>
    ) => {
      changeDate(state, action.payload);
      updateStateUsingStore(state);
    },
    changeLanguage: (
      state,
      action: PayloadAction<Langs>
    ) => {
      state.currentLanguage = action.payload;
    },
  },
});

export default salaryReducer.reducer;
export const salaryActions = salaryReducer.actions;
