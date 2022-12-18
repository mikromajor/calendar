import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { PayloadType } from "../../store/reducer/alcoTypes";

export type MultiplierProps = {
  values: {
    a: string;
    b: string;
    c: string;
  };
  setMultipliers: ActionCreatorWithPayload<
    PayloadType,
    string
  >;
};
