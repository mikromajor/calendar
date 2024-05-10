import * as React from "react";
import dayjs, { Dayjs } from "dayjs";
import Badge from "@mui/material/Badge";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import {
  PickersDay,
  PickersDayProps,
} from "@mui/x-date-pickers/PickersDay";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { useAppSelector } from "../../../../store/hooks/redux";
import { Total, Month } from "../../../../types/alcoTypes";
import updateLocale from "dayjs/plugin/updateLocale";

dayjs.extend(updateLocale);

// Replace "en" with the name of the locale you want to update.
dayjs.updateLocale("en", {
  // Sunday = 0, Monday = 1.
  weekStart: 1,
});

function ViewInfoDay(
  props: PickersDayProps<Dayjs> & {
    highlightedDays?: Total[];
  }
) {
  const { outsideCurrentMonth } = props;
  const { currentDate, yearData } = useAppSelector(
    (state) => state.alcoReducer
  );
  const { month } = currentDate;
  const { months } = yearData;
  const isMonthData = months[Number(month)];
  const highlightedDays = !!isMonthData
    ? isMonthData.days
    : [];

  const isSelected =
    !outsideCurrentMonth &&
    highlightedDays[props.day.date()];

  return (
    <Badge
      key={props.day.toString()}
      overlap='circular'
      badgeContent={
        isSelected
          ? isSelected.totalVodka.toString()
          : undefined
      }
    >
      <PickersDay
        {...props}
        outsideCurrentMonth={outsideCurrentMonth}
        day={props.day}
      />
    </Badge>
  );
}

interface CalendarDayInfoProps {
  setDate: React.Dispatch<
    React.SetStateAction<dayjs.Dayjs | null>
  >;
  date: Dayjs | null;
}

export function CalendarDayInfo({
  date,
  setDate,
}: CalendarDayInfoProps) {
  // TODO не изменяется месяц и год в редаксе, связать новый календарь со стейтом редакса
  const { currentDate, yearData } = useAppSelector(
    (state) => state.alcoReducer
  );
  const { day, month, year } = currentDate;

  const { months } = yearData;
  const isMonthData = months[Number(month)];
  const highlightedDays = !!isMonthData
    ? isMonthData.days
    : [];
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar
        value={date}
        onChange={(newDate) => setDate(newDate)}
        slots={{
          day: ViewInfoDay,
        }}
        slotProps={{
          day: {
            highlightedDays,
          } as any,
        }}
        showDaysOutsideCurrentMonth
        fixedWeekNumber={6}
        dayOfWeekFormatter={(weekday) =>
          `${weekday.format("ddd")}.`
        }
      />
    </LocalizationProvider>
  );
}
