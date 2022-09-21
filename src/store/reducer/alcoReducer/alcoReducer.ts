type initAlcoState = {
  beer: number;
  heightAlc: number;
  win: number;
  others: number;
  totalVodka: number;
};
enum KindOfDrunkAlcohol {
  BEER = "BEER",
  HEIGHT_ALC = "whisky, brandy or vd",
  WIN = "12%",
  OTHERS = "X",
}
const { BEER, HEIGHT_ALC, WIN, OTHERS } =
  KindOfDrunkAlcohol;

type Action = {
  type: KindOfDrunkAlcohol;
  liters: number;
  percentAlc: number;
};

export const alcoReducer = (
  state: initAlcoState,
  action: Action
) => {
  const newAlcoState = { ...state };
  newAlcoState.totalVodka +=
    action.liters * action.percentAlc * 0.015;
  switch (action.type) {
    case BEER:
      newAlcoState.beer += action.liters;
      return newAlcoState;

    case WIN:
      newAlcoState.win += action.liters;
      return newAlcoState;
    case HEIGHT_ALC:
      newAlcoState.heightAlc += action.liters;
      return newAlcoState;
    case OTHERS:
      newAlcoState.others += action.liters;
      return newAlcoState;
    default:
      return newAlcoState;
  }
};
