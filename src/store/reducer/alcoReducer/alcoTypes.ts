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
