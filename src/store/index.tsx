import {
  configureStore,
  ThunkAction,
  Action,
  // PreloadedState,
  combineReducers,
} from "@reduxjs/toolkit";
import alcoReducer from "./reducer/alcoReducer";
import salaryReducer from "./reducer/salaryReducer";

const rootReducer = combineReducers({
  alcoReducer,
  salaryReducer,
});
// export function store(
//   preloadedState?: PreloadedState<RootState>
// ) {
//   return configureStore({
//     reducer: rootReducer,
//     preloadedState,
//   });
// }
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
