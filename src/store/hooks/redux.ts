import {
  TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from "react-redux";

import { AppDispatch, RootState } from "..";

// export const useAppDispatch = () =>
//   useDispatch<AppDispatch>();
export const useAppDispatch: () => AppDispatch =
  useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> =
  useSelector;
