import { useState } from "react";

import dayjs, { Dayjs } from "dayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import { getSalary } from "../../store/reducer/http/salaryActions";
import { useAppDispatch } from "../../store/hooks/redux";

export function MobileCalendar() {
  const [value, setValue] = useState<Dayjs | null>(
    dayjs(Date())
  );
  const dispatch = useAppDispatch();

  const changeDate = (date: Dayjs | null) => {
    if (!date) return;
    const month = date.month() + 1;
    const year = date.year();
    setValue(date);
    dispatch(getSalary({ year, month }));
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label='Date'
        views={["month", "year"]}
        openTo='month'
        value={value}
        onChange={changeDate}
      />
    </LocalizationProvider>
  );
}
