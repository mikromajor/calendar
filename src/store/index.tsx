import {
  configureStore,
  combineReducers,
} from "@reduxjs/toolkit";

import alcoReducer from "./reducer/alcoReducer/alcoReducer";
import { timeReducer } from "./reducer/timeReducer/timeReducer";

const rootReducer = combineReducers({
  alcoReducer,
  // timeReducer,
});

const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];

export default setupStore;
