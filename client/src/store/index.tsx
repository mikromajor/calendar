import {
  configureStore,
  ThunkAction,
  Action,
  combineReducers,
} from "@reduxjs/toolkit";
import alcoReducer from "./reducer/alcoReducer";
import salaryReducer from "./reducer/salaryReducer";
import appReducer from "./reducer/appReducer";

const rootReducer = combineReducers({
  appReducer,
  alcoReducer,
  salaryReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type AppStore = typeof store;
export type AppDispatch = AppStore["dispatch"];
export type RootState = ReturnType<typeof rootReducer>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
