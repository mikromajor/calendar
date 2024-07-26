import { $authHost, $host } from "./index";
import { IDose } from "../types/alcoTypes";

export const addAlcoDose = async (dose: IDose) => {
  //POST http://localhost:7000/api/alco_calendar/add
  // req.body = {"year":"2020", "month":"1", "day":"1", "additionVodka":"65"}
  const { data } = await $authHost.post(
    "api/alco_calendar/add",
    dose
  );
  return data;
};

export const getAlcoYear = async (year: string) => {
  //GET http://localhost:7000/api/alco_calendar/get?year=2020
  const { data } = await $host.get(
    "api/alco_calendar/get?year=" + year
  );
  return data;
};
