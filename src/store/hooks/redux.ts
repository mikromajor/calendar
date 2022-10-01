import { useSelector } from "react-redux";
import {
  TypedUseSelectorHook,
  useDispatch,
} from "react-redux";
import store, { AppDispatch, RootState } from "../.";

export const useAppDispatch = () =>
  useDispatch<AppDispatch>;
export const useAppSelector: TypedUseSelectorHook<RootState> =
  useSelector;
