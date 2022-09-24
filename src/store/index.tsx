import {
  configureStore,
  combineReducers,
} from "@reduxjs/toolkit";

import alcoReducer from "./reducer/alcoReducer/alcoReducer";
import { timeReducer } from "./reducer/timeReducer/timeReducer";

const rootReducer = combineReducers({
  // alcoReducer,
  // timeReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
