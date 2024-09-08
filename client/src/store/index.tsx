import {
  configureStore,
  ThunkAction,
  Action,
  combineReducers,
} from "@reduxjs/toolkit";
import alcoReducer from "./reducer/alcoSlice";
import salaryReducer from "./reducer/salarySlice";
import userReducer from "./reducer/userSlice";
import serviceReducer from "./reducer/serviceSlice";

const rootReducer = combineReducers({
  userReducer,
  serviceReducer,
  alcoReducer,
  salaryReducer,
});

const store = configureStore({
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
