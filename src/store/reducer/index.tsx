import {
  configureStore,
  combineReducers,
} from "@reduxjs/toolkit";

import alcoReducer from "./alcoReducer/alcoReducer";
import { timeReducer } from "./timeReducer/timeReducer";

const rootReducer = combineReducers({
  alcoReducer,
  timeReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
