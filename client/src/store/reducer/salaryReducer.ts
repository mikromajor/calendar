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
import { getSalary } from "./http/salaryActions";

export const salaryReducer = createSlice({
  name: "salaryState",
  initialState: SALARY_INIT,
  reducers: {
    getSalary: (state, action: PayloadAction<IPayload>) => {
      calculateSalary(state, action.payload);
      saveSalaryInStorage(state);
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
    [getSalary.pending.type]: (state) => {},
    [getSalary.fulfilled.type]: (state) => {},
    [getSalary.rejected.type]: (state) => {},
    //
    // [getSalary.pending.type]: (state)=>{

    // },
    // [getSalary.fulfilled.type]: (state)=>{

    // },
    // [getSalary.rejected.type]: (state)=>{

    // },
  },
});

export default salaryReducer.reducer;
export const salaryActions = salaryReducer.actions;
