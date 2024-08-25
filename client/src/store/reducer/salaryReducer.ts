import {
  // createAsyncThunk,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { SALARY_INIT } from "../../constants/salaryConstants";
import { IPayload } from "../../types/salaryTypes";
import {
  changeDate,
  updateStateUsingStore,
  calculateSalary,
  saveSalaryInStorage,
} from "./salaryHandlers";
import { getOne } from "./http/salaryActions";
import { AlcoState } from "../../types/alcoTypes";
import { IServerRes } from "../../types/userTypes";

export const salaryReducer = createSlice({
  name: "salaryState",
  initialState: SALARY_INIT,
  reducers: {
    calcSalary: (
      state,
      action: PayloadAction<IPayload>
    ) => {
      calculateSalary(state, action.payload);
    },
    changeSalaryDate: (
      state,
      action: PayloadAction<IPayload>
    ) => {
      changeDate(state, action.payload);
      updateStateUsingStore(state);
    },
  },
  extraReducers: {
    //getOne
    [getOne.pending.type]: (state) => {},
    [getOne.fulfilled.type]: (
      state,
      action: PayloadAction<IServerRes>
    ) => {
      Object.assign(state, action.payload.salaryState);
    },
    [getOne.rejected.type]: (state) => {},
    //
    // [getOne.pending.type]: (state)=>{

    // },
    // [getOne.fulfilled.type]: (state)=>{

    // },
    // [getOne.rejected.type]: (state)=>{

    // },
  },
});

export default salaryReducer.reducer;
export const salaryActions = salaryReducer.actions;
