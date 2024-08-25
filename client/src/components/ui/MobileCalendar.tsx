import React, { useState } from "react";

import dayjs, { Dayjs } from "dayjs";
import {
  DemoContainer,
  DemoItem,
} from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

import {
  useAppSelector,
  useAppDispatch,
} from "../../store/hooks/redux";

export function MobileCalendar() {
  const [value, setValue] = React.useState<Dayjs | null>(
    dayjs(Date())
  );
  function handleOnChange(e: any) {
    console.log("handleOnChange e=> ", e);
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar
        views={["month", "year"]}
        openTo='month'
        value={value}
        onChange={handleOnChange}
      />
    </LocalizationProvider>
  );
}
