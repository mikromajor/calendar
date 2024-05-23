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
import {
  useAppSelector,
  useAppDispatch,
} from "../../../../store/hooks/redux";
import { alcoActions } from "../../../../store/reducer/alcoReducer";
import { Total } from "../../../../types/alcoTypes";
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
  // TODO fix problem with highlightedDays

  const { outsideCurrentMonth } = props;
  const { currentDate, yearData } = useAppSelector(
    (state) => state.alcoReducer
  );
  const { month } = currentDate;
  const { months } = yearData;
  const isMonthData = months[Number(month)];
  const highlightedDaysInMonth = !!isMonthData
    ? isMonthData.days
    : [];

  const isSelected =
    !outsideCurrentMonth &&
    highlightedDaysInMonth[props.day.date()];

  return (
    <Badge
      key={props.day.toString()}
      overlap='circular'
      color='secondary'
      max={999}
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

export function CalendarDayInfo() {
  // TODO: change month in CalendarDayInfo does not change state
  const { currentDate, yearData } = useAppSelector(
    (state) => state.alcoReducer
  );
  const { day, month, year } = currentDate;

  const dispatch = useAppDispatch();
  const { changeDay, changeMonth, changeYear } =
    alcoActions;

  const { months } = yearData;
  const isMonthData = months[Number(month)];
  const highlightedDays = !!isMonthData
    ? isMonthData.days
    : [];

  const changeDate = (date: Dayjs) => {
    if (date && date !== null) {
      const newDay = date.date().toString();
      const newMonth = (date.month() + 1).toString();
      const newYear = date.year().toString();

      newYear !== year && dispatch(changeYear(newYear));
      newMonth !== month && dispatch(changeMonth(newMonth));
      newDay !== day && dispatch(changeDay(newDay));
    }
  };

  return (
    <div className='alco-counter__calendar-day-info'>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar
          value={dayjs(year + "-" + month + "-" + day)}
          onChange={(date) => changeDate(dayjs(date))}
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
          views={["year", "month", "day"]}
          onMonthChange={(date) => {
            dispatch(
              changeMonth((date.month() + 1).toString())
            );
          }}
        />
      </LocalizationProvider>
    </div>
  );
}
