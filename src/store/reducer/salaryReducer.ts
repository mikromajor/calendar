import {
  // createAsyncThunk,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { INIT_SALARY_STATE } from "./constants/salaryConstants";
import { PayloadType } from "./types/salaryTypes";
import { amountWeekendsAndWeekdays } from "./salaryHandlers";

export const salaryReducer = createSlice({
  name: "salaryState",
  initialState: INIT_SALARY_STATE,
  reducers: {
    addWorkedExtraHours: (
      state,
      action: PayloadAction<PayloadType>
    ) => {},
    getSalaryForTheMonth: (
      state,
      action: PayloadAction<PayloadType>
    ) => {
      const { usersMonth, usersYear } = action.payload;
      const key = "salaryForTheMonth_" + usersMonth;

      if (typeof window === "undefined") {
        state = INIT_SALARY_STATE;
      }

      const { weekends, weekdays } =
        amountWeekendsAndWeekdays(usersYear, usersMonth);

      try {
        const item = window.localStorage.getItem(key);

        if (item) {
          state = JSON.parse(item);
        } else {
          state.standardWorkHours = weekdays * 8;
          state.weekDays = weekdays;
          state.weekendDays = weekends;
          state.standardSalary = weekdays * 8 * 36.06;
        }
        // window.localStorage.setItem(
        //   key,
        //   JSON.stringify(state)
        // );
      } catch (error) {
        console.log(error);
      }
    },
  },
});

export default salaryReducer.reducer;
export const salaryActions = salaryReducer.actions;
