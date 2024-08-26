import {
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { SALARY_INIT } from "../../constants/salaryConstants";
import { IPayload } from "../../types/salaryTypes";
import { calculateSalary } from "./salaryHandlers";
import {
  getSalary,
  saveSalaryToDB,
} from "./http/salaryActions";
import { IServerRes } from "../../types/userTypes";

export const salaryReducer = createSlice({
  name: "salaryState",
  initialState: SALARY_INIT,
  reducers: {
    handleChangeInputData: (
      state,
      action: PayloadAction<IPayload>
    ) => {
      calculateSalary(state, action.payload);
    },
  },
  extraReducers: {
    //getSalary
    [getSalary.pending.type]: (state) => {},
    [getSalary.fulfilled.type]: (
      state,
      action: PayloadAction<IServerRes>
    ) => {
      Object.assign(state, action.payload.salaryState);
    },
    [getSalary.rejected.type]: (state) => {},
    //saveSalary
    [saveSalaryToDB.pending.type]: (state) => {},
    [saveSalaryToDB.fulfilled.type]: (state) => {},
    [saveSalaryToDB.rejected.type]: (state) => {},
  },
});

export default salaryReducer.reducer;
export const salaryActions = salaryReducer.actions;
