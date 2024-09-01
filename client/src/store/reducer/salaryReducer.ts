import {
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { SALARY_INIT } from "../../constants/salaryConstants";
import { IPayload } from "../../types/salaryTypes";
import { calculateSalary } from "./salaryHandlers";
import {
  getSalary,
  serverSalaryCalculate,
} from "./http/salaryActions";
import { IServerRes } from "../../types/userTypes";

export const salaryReducer = createSlice({
  name: "salaryState",
  initialState: SALARY_INIT,
  reducers: {},
  extraReducers: {
    //getSalary
    [getSalary.pending.type]: (state) => {
      state.service.isLoading = true;
      state.service.isError = false;
      state.service.message = "";
    },
    [getSalary.fulfilled.type]: (
      state,
      action: PayloadAction<IServerRes>
    ) => {
      const { salary, message } = action.payload;
      Object.assign(state, salary);
      state.service.isLoading = false;
      state.service.message = message ? message : "";
    },
    [getSalary.rejected.type]: (
      state,
      action: PayloadAction<IServerRes>
    ) => {
      state.service.isLoading = false;
      state.service.isError = true;
      state.service.message = action.payload.message; //TODO check it
    },
    //serverSalaryCalculate
    [serverSalaryCalculate.pending.type]: (state) => {
      state.service.isLoading = true;
      state.service.isError = false;
      state.service.message = "";
    },
    [serverSalaryCalculate.fulfilled.type]: (
      state,
      action: PayloadAction<IServerRes>
    ) => {
      const { salary, message } = action.payload;
      Object.assign(state, salary);
      state.service.isLoading = false;
      state.service.message = message ? message : "";
    },
    [serverSalaryCalculate.rejected.type]: (
      state,
      action: PayloadAction<IServerRes>
    ) => {
      state.service.isLoading = false;
      state.service.isError = true;
      state.service.message = action.payload.message; //TODO check it
    },
  },
});

export default salaryReducer.reducer;
export const salaryActions = salaryReducer.actions;

// model ServerRes {
//   message?: string; //for error
//   salary?: ISalaryInit;
// }
