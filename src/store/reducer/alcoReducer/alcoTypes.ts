export enum KindOfDrunkAlcohol {
  BEER = "BEER",
  HEIGHT_ALC = "HEIGHT_ALC",
  VINE = "VINE",
  OTHERS = "X",
}

export type Action = {
  type: KindOfDrunkAlcohol;
  payload: {
    liters: number;
    percentAlc: number;
  };
};

export const initialState = {
  beer: 0,
  heightAlc: 0,
  vine: 0,
  others: 0,
  totalVodka: 0,
};
