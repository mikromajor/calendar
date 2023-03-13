import { initialAlcoState } from "./constants";

export type PayloadType = {
  liters: number;
  percent: number;
  multiplier: number;
  month: string;
};
export const PAYLOAD = {
  liters: 0,
  percent: 0,
  multiplier: 1,
  month: "0",
};
export type InitialAlcoState = typeof initialAlcoState;
