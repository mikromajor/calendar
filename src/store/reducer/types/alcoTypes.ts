import { INIT_ALCO_STATE } from "../constants/alcoConstants";

export type StateType = typeof INIT_ALCO_STATE;

export type Payload = {
  volume?: number;
  percent?: number;
  month?: string;
  year?: string;
};
