import {
  // createAsyncThunk,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { INIT_SALARY_STATE } from "./constants/salaryConstants";
import { PayloadType } from "./types/salaryTypes";
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
      const isStorage = getStorageData(action.payload);
      state = isStorage
        ? isStorage
        : updateState(action.payload);

      return state;
    },
  },
});

export default salaryReducer.reducer;
export const salaryActions = salaryReducer.actions;
