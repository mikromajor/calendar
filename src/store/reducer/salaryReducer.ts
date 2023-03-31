import {
  // createAsyncThunk,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { INIT_SALARY_STATE } from "./constants/salaryConstants";
import { PayloadType } from "./types/salaryTypes";

export const salaryReducer = createSlice({
  name: "salaryState",
  initialState: INIT_SALARY_STATE,
  reducers: {
    addWorkedExtraHours: (
      state,
      action: PayloadAction<PayloadType>
    ) => {},
    getCurrentMonthSalary: (state) => {},
    getSalaryForTheMonth: (
      state,
      action: PayloadAction<PayloadType>
    ) => {
      const key =
        "salaryForTheMonth_" + action.payload.usersMonth;

      if (typeof window === "undefined") {
        state = INIT_SALARY_STATE;
      }

      try {
        const item = window.localStorage.getItem(key);
        state = item ? JSON.parse(item) : INIT_SALARY_STATE; // insted initState calculate standard work hours for the month
        // window.localStorage.setItem(
        //   key,
        //   JSON.stringify(val)
        // );
      } catch (error) {
        console.log(error);
      }
    },
  },
});

export default salaryReducer.reducer;
export const salaryActions = salaryReducer.actions;
