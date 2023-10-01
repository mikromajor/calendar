import {
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { INIT_ALCO_STATE } from "./constants/alcoConstants";
import {
  setDecimal,
  createKey,
  saveDataInStorage,
  changeStateUsingStor,
  fillMonthDataWithZeros,
  fillStateWithZeros,
} from "./alcoHandlers";

export const alcoReducer = createSlice({
  name: "alcoState",
  initialState: INIT_ALCO_STATE,
  reducers: {
    changeVolumeDrunk: (
      state,
      action: PayloadAction<string>
    ) => {
      const volume = action.payload;

      !!volume && (state.volumeDrunks = Number(volume));
    },
    changePercentDrunk: (
      state,
      action: PayloadAction<string>
    ) => {
      const percent = action.payload;
      !!percent && (state.percentDrunk = Number(percent));
    },
    changeMonth: (state, action: PayloadAction<string>) => {
      const month = action.payload;
      const index = state.months.findIndex(
        (obj) => obj.month === month
      );
      if (index > -1) {
        state.currentIndex = index;
      } else {
        state.currentIndex = state.months.length;
        state.months.push({
          month: month,
          sumEthanolPerMonth: 0,
        });
      }
    },
    changeYear: (state, action: PayloadAction<string>) => {
      const year = action.payload;

      // шукаємо чи немає такого року в сторі
      // якщо є то змінюємо карентРік
      // якщо немає то зберігаємо в стор стейт за новий рік
    },

    calculating: (state) => {
      const { volumeDrunks, percentDrunk } = state;
      let vodka = 0,
        ethanol = 0;

      // if (volumeDrunks && percentDrunk) {
      //   ethanol = setDecimal(
      //     (volumeDrunks * percentDrunk) / 100,
      //     2
      //   );

      //   vodka = setDecimal(ethanol * 2.4, 2);

      //   state.totalEthanolPerMonth = setDecimal(
      //     state.totalEthanolPerMonth + ethanol,
      //     2
      //   );
      //   state.totalVodkaPerMonth = setDecimal(
      //     state.totalVodkaPerMonth + vodka,
      //     2
      //   );

      //   state.totalVodkaPerYear = setDecimal(
      //     vodka + state.totalVodkaPerYear,
      //     2
      //   );
      //   state.totalEthanolPerYear = setDecimal(
      //     ethanol + state.totalEthanolPerYear,
      //     2
      //   );
      // }
      // saveDataInStorage(state);
    },
    clearStorageForMonth: (state) => {
      // const key = createKey(state.month, state.year);
      // window.localStorage.removeItem(key);
    },
    // clearAllStor: () => {
    //   window.localStorage.clear();
    // },
  },
});

export default alcoReducer.reducer;
export const alcoActions = alcoReducer.actions;
