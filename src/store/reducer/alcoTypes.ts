import { INIT_ALCO_STATE } from "./constants";

export type PayloadType = {
  liters: number;
  percent: number;
  multiplier: number;
  month: string;
};

export type InitialAlcoState = typeof INIT_ALCO_STATE;
