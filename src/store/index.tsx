import {
  configureStore,
  ThunkAction,
  Action,
} from "@reduxjs/toolkit";
import alcoReducer from "./reducer/alcoReducer/alcoReducer";

const rootReducer = {
  alcoReducer,
  // timeReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
// export type AppDispatch = AppStore["dispatch"];
// export type RootState = ReturnType<typeof rootReducer>;
// export type AppStore = ReturnType<typeof store>;

export default store;
