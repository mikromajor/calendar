import { INIT_ALCO_STATE } from "../constants/alcoConstants";

export type AlcoState = typeof INIT_ALCO_STATE;
export type StateKeys = keyof AlcoState;
