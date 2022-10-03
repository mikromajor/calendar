export enum KindOfDrunkAlcohol {
  BEER = "BEER",
  HEIGHT_ALC = "HEIGHT_ALC",
  VINE = "VINE",
  OTHERS = "X",
}

export type PayloadType = {
  liters: number;
  percentAlc: number;
};

export const initialAlcoState = {
  beer: 0,
  heightAlc: 0,
  vine: 0,
  others: 0,
  totalVodka: 0,
};
