import {
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import {
  INIT_ALCO_STATE,
  INIT_DAY,
  INIT_MONTH,
  INIT_YEAR,
} from "../../constants/alcoConstants";
import {
  tryStorageData,
  saveStateInStorage,
  setDecimal,
  createKey,
  calcDayData,calcMonthData
} from "./alcoHandlers";
import { Language } from "../../types/alcoTypes";

const store = tryStorageData(
  INIT_ALCO_STATE.currentDate.year
);

export const alcoReducer = createSlice({
  name: "alcoState",
  initialState: !!store ? store : INIT_ALCO_STATE,
  reducers: {
    changeLanguage: (
      state,
      action: PayloadAction<Language>
    ) => {
      state.currentLang = action.payload;
    },

    changeMonth: (state, action: PayloadAction<string>) => {
      const month = Number(action.payload);
      if (month > 0 && month < 13) {
        state.currentDate.month = action.payload;
      }
    },
    changeYear: (state, action: PayloadAction<string>) => {
      const year = action.payload;

      const isStoreData = tryStorageData(year);

      Object.assign(
        state,
        !!isStoreData ? isStoreData : INIT_ALCO_STATE,
        {
          currentLang: state.currentLang,
          currentDate: {
            ...state.currentDate,
            year,
          },
        }
      );
    },
//TODO: fixing
    calculating: (
      state,
      action: PayloadAction<string[]>
    ) => {
      const [vol, per] = action.payload.map((d) =>
        Number(d)
      );
      const { day, month, year } = state.currentDate;

      if (vol && per) {
        const vodka = setDecimal(
          (vol * per * 2.5) / 100,
          0
        );
        // setDecimal(state.sumEthanolPerMonth + ethanol, 0);
        state.yearData.totalVodka += vodka;
        
        if(state.yearData.months?.[Number(month)]){
          state.yearData.months[Number(month)].totalVodka +=
          vodka;
          state.yearData.months[Number(month)].days[Number(day)] = 
        }

        if (!state.yearData.months?.[Number(month)]) {
          state.yearData.months[Number(month)] = {
            ...INIT_MONTH,totalVodka: vodka,
          };
          state.yearData.months[Number(month)].days[
            Number(day)
          ] = { ...INIT_DAY,totalVodka: vodka, };
        }
      


        state.yearData.months[Number(month)].days[
          Number(day)
        ].totalVodka += vodka;

        saveStateInStorage(state);
      }
    },
    clearStorageForYear: (state) => {
      const key = createKey(state.year);
      window.localStorage.removeItem(key);
      Object.assign(state, INIT_ALCO_STATE, {
        year: state.year,
        currentLang: state.currentLang,
      });
    },
    clearMonthData: (state) => {
      const monthData = state.yearData[Number(state.month)];
      monthData.sumEthanolPerMonth = 0;
      monthData.sumVodkaPerMonth = 0;

      state.sumVodkaPerYear -= state.sumVodkaPerMonth;
      state.sumEthanolPerYear -= state.sumEthanolPerMonth;
      state.sumEthanolPerMonth = 0;
      state.sumVodkaPerMonth = 0;
    },
    // clearAllStor: () => {
    //   window.localStorage.clear();
    // },
  },
});

export default alcoReducer.reducer;
export const alcoActions = alcoReducer.actions;
