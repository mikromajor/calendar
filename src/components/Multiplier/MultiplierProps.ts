import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { PayloadType } from "../../store/reducer/alcoTypes";

export type MultiplierProps = {
  values: string[];
  setMultipliers: ActionCreatorWithPayload<
    PayloadType,
    string
  >;
};
