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

export const MULTIPLIER_VALUES = {
  a: "0.1",
  b: "1",
  c: "10",
};

export const initialAlcoState = {
  liters: 0,
  percent: 5,
  totalVodka: 0,
  month: "0",
  multiplier: 1,
};
