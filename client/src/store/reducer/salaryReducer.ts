import {
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { SALARY_INIT } from "constants/salaryConstants";
import {
  getSalary,
  serverSalaryCalculate,
} from "./http/salaryActions";
import { IServerRes } from "types/userTypes";
import { IPayload } from "types/salaryTypes";

export const salarySlice = createSlice({
  name: "salaryState",
  initialState: SALARY_INIT,
  reducers: {
    updateInput: (
      salary,
      action: PayloadAction<IPayload>
    ) => {
      Object.assign(salary, action.payload);
    },
  },
  extraReducers: {
    [getSalary.fulfilled.type]: (
      state,
      action: PayloadAction<IServerRes>
    ) => {
      Object.assign(state, action.payload);
    },

    [serverSalaryCalculate.fulfilled.type]: (
      state,
      action: PayloadAction<IServerRes>
    ) => {
      Object.assign(state, action.payload);
    },
  },
});

export default salarySlice.reducer;
export const salaryActions = salarySlice.actions;

// model ServerRes {
//   message?: string; //for error
//   salary?: ISalaryInit;
// }
