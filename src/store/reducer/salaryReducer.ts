import {
  // createAsyncThunk,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import {
  INIT_SALARY_STATE,
  PREMIUM_COEFFICIENT,
} from "./constants/salaryConstants";
import { PayloadType } from "./types/salaryTypes";
import { amountWeekendsAndWeekdays } from "./salaryHandlers";

const { pr_50, pr_100, pr_120 } = PREMIUM_COEFFICIENT;

export const salaryReducer = createSlice({
  name: "salaryState",
  initialState: INIT_SALARY_STATE,
  reducers: {
    getSalaryForTheMonth: (
      state,
      action: PayloadAction<PayloadType>
    ) => {
      const {
        usersMonth,
        usersYear,
        usersSalaryRate,
        usersPremiumRate,
        usersTaxRate,
      } = action.payload;
      let key = "salaryForTheDate_";
      key +=
        usersYear && usersMonth
          ? "" + usersYear + usersMonth
          : "";

      if (typeof window === "undefined") {
        state = INIT_SALARY_STATE;
      } // check - does it need?

      const { weekends, weekdays, year, month } =
        amountWeekendsAndWeekdays(usersYear, usersMonth);

      try {
        const item = window.localStorage.getItem(key);

        if (item) {
          state = JSON.parse(item);
        } else {
          state = INIT_SALARY_STATE;

          state.year = year;
          state.month = month;

          state.salaryRate = usersSalaryRate
            ? usersSalaryRate
            : INIT_SALARY_STATE.salaryRate;
          state.premiumRate = usersPremiumRate
            ? usersPremiumRate
            : INIT_SALARY_STATE.premiumRate;
          state.taxRate = usersTaxRate
            ? usersTaxRate
            : INIT_SALARY_STATE.taxRate;

          state.weekDays = weekdays;
          state.weekendDays = weekends;
        }
        // window.localStorage.setItem(
        //   key,
        //   JSON.stringify(state)
        // );
      } catch (error) {
        console.log(error);
      }
    },

    addWorkedExtraHoursToTheMonth: (
      state,
      action: PayloadAction<PayloadType>
    ) => {
      const {
        usersMonth,
        usersYear,
        usersSalaryRate,
        usersPremiumRate,
        usersTaxRate,
        workedExtraHours_50,
        workedExtraHours_100,
      } = action.payload;

      state.extraHours_50 += workedExtraHours_50
        ? workedExtraHours_50
        : 0;
      state.extraHours_100 += workedExtraHours_100
        ? workedExtraHours_100
        : 0;
    },
  },
});

export default salaryReducer.reducer;
export const salaryActions = salaryReducer.actions;
