import {
  configureStore,
  ThunkAction,
  Action,
  PreloadedState,
  combineReducers,
} from "@reduxjs/toolkit";
import alcoReducer from "./reducer/alcoReducer";

const rootReducer = combineReducers({
  alcoReducer,
  // otherReducer,
});
export function store(
  preloadedState?: PreloadedState<RootState>
) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
}
export type AppStore = ReturnType<typeof store>;
export type AppDispatch = AppStore["dispatch"];
export type RootState = ReturnType<typeof rootReducer>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
