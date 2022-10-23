export type PayloadType = {
  liters: number;
  percent: number;
  month: string;
};

export const initialAlcoState = {
  liters: 0,
  percent: 5,
  totalVodka: 0,
  month: "01",
};
