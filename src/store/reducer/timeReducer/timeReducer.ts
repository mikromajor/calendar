type InitTimeState = {
  workHours: number;
  totalPayHours: number;
};

enum Hours {
  NORMAL = 1,
  FIFTY = 1.5,
  HUNDRED = 2,
  MAX = 2.2,
}
const { NORMAL, FIFTY, HUNDRED, MAX } = Hours;

type TimesAction = {
  type: Hours;
  payload: number;
};

const initState = {
  workHours: 0,
  totalPayHours: 0,
};

export const timeReducer = (
  state: InitTimeState = initState,
  action: TimesAction
) => {
  const newState = { ...state };

  switch (action.type) {
    case NORMAL:
      newState.workHours += action.payload;
      return newState;
    case FIFTY:
      newState.workHours += action.payload;
      newState.totalPayHours += action.payload * 1.5;
      return newState;
    case HUNDRED:
      newState.workHours += action.payload;
      newState.totalPayHours += action.payload * 2;
      return newState;
    case MAX:
      newState.workHours += action.payload;
      newState.totalPayHours += action.payload * 2.2;
      return newState;
    default:
      return state;
  }
};
