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
  month: "1",
};

export const initialAlcoState = {
  liters: 0,
  percent: 5,
  totalVodka: 0,
  month: new Date().getMonth().toString() || "0",
  multiplier: 1,
};
