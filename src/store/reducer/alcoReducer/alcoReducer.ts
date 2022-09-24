import {
  createAction,
  createReducer,
} from "@reduxjs/toolkit";
// import { action } from "typesafe-actions";

const initAlcoState = {
  beer: 0,
  heightAlc: 0,
  VinE: 0,
  others: 0,
  totalVodka: 0,
};
type InitAlcoState = typeof initAlcoState;

enum KindOfDrunkAlcohol {
  BEER = "BEER",
  HEIGHT_ALC = "HEIGHT_ALC",
  VINE = "VINE",
  OTHERS = "X",
}
const { BEER, HEIGHT_ALC, VINE, OTHERS } =
  KindOfDrunkAlcohol;

type Action = {
  type: KindOfDrunkAlcohol;
  payload: {
    liters: number;
    percentAlc: number;
  };
};

const beer = createAction(BEER);
const vine = createAction(VINE);

export default createReducer(initAlcoState, {
  beer: function (state: InitAlcoState, action: Action) {
    const liters = action.payload.liters;
    const percent = action.payload.percentAlc;

    state.beer += liters;
    state.totalVodka += liters * percent * 0.015;
  },
  vine: function (state: InitAlcoState) {},
});

// export default function alcoReducer (
//   state: initAlcoState,
//   action: Action
// ) {
//   state.totalVodka +=
//     action.liters * action.percentAlc * 0.015;
//   switch (action.type) {
//     case BEER:
//       state.beer += action.liters;
//       return state;

//     case VINE:
//       state.VinE += action.liters;
//       return state;
//     case HEIGHT_ALC:
//       state.heightAlc += action.liters;
//       return state;
//     case OTHERS:
//       state.others += action.liters;
//       return state;
//     default:
//       return state;
//   }
// };
