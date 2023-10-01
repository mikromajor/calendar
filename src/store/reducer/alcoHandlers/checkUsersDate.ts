import { Payload } from "../types/alcoTypes";

export const checkUsersDate = (payload: Payload) => {
  const { month, year } = payload;
  const checkedDate = { month: "0", year: "0" };
  let m, y;
  !!month &&
    (m = Number(month)) &&
    m > 0 &&
    m < 13 &&
    (checkedDate.month = m + "");
  !!year &&
    (y = Number(year)) &&
    y > 2020 &&
    y < 2050 &&
    (checkedDate.year = y + "");
  return checkedDate;
};
