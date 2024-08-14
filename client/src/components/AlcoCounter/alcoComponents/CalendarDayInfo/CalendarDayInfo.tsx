import * as React from "react";
import dayjs, { Dayjs } from "dayjs";
import Badge from "@mui/material/Badge";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import {
  PickersDay,
  PickersDayProps,
} from "@mui/x-date-pickers/PickersDay";
import {
  DateCalendar,
  DateCalendarSlotProps,
} from "@mui/x-date-pickers/DateCalendar";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

import {
  useAppSelector,
  useAppDispatch,
} from "../../../../store/hooks/redux";
import { alcoActions } from "../../../../store/reducer/alcoReducer";
import { getAlcoYear } from "../../../../store/reducer/http/alcoActions";
import { DayInfo } from "../../../../types/alcoTypes";
import updateLocale from "dayjs/plugin/updateLocale";

dayjs.extend(updateLocale);

// Replace "en" with the name of the locale you want to update.
dayjs.updateLocale("en", {
  // Sunday = 0, Monday = 1.
  //"en" - не меняет язык
  weekStart: 1,
});

function CustomDay(
  props: PickersDayProps<Dayjs> & {
    days?: DayInfo[];
  }
) {
  const {
    days = [],
    day,
    outsideCurrentMonth,
    ...other
  } = props;

  const isSelected =
    !outsideCurrentMonth && days[day.date()];

  return (
    <Badge
      key={day.toString()}
      overlap='circular'
      color='secondary'
      max={9999}
      badgeContent={
        isSelected &&
        (isSelected.totalVodka > 0 ||
          isSelected.totalVodka < 0)
          ? isSelected.totalVodka.toString()
          : undefined
      }
    >
      <PickersDay
        {...props}
        outsideCurrentMonth={outsideCurrentMonth}
        day={day}
      />
    </Badge>
  );
}

export function CalendarDayInfo() {
  // TODO: change calendar's language when app lang change
  const { currentDate, yearData, service } = useAppSelector(
    (state) => state.alcoReducer
  );
  const { currentTheme, currentLang } = useAppSelector(
    (state) => state.appReducer
  );
  const { day, month, year } = currentDate;

  const dispatch = useAppDispatch();
  const { changeDay, changeMonth } = alcoActions;

  const { months } = yearData;

  const isMonthData = months?.[Number(month)];

  const days = !!isMonthData ? isMonthData.days : [];

  const changeDate = (date: Dayjs) => {
    if (!!date) {
      const newDay = date.date() + "";
      const newMonth = date.month() + 1 + "";
      const newYear = date.year() + "";

      newYear !== year &&
        dispatch(
          getAlcoYear({ year: newYear, month, day })
        );
      newMonth !== month &&
        dispatch(changeMonth(newMonth + ""));
      newDay !== day && dispatch(changeDay(newDay + ""));
    }
  };
  return (
    <div
      className={`alco-counter__calendar-day-info alco-counter__calendar-day-info--${currentTheme}   `}
    >
      <div style={{ height: "10px" }}>
        <Box
          sx={{ width: "100%" }}
          hidden={!service.isLoading}
        >
          <LinearProgress />
        </Box>
      </div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar
          value={dayjs(year + "-" + month + "-" + day)}
          onChange={(date) => changeDate(dayjs(date))}
          slots={{
            day: CustomDay,
          }}
          slotProps={{
            day: {
              days,
            } as any,
          }}
          showDaysOutsideCurrentMonth
          fixedWeekNumber={6}
          dayOfWeekFormatter={(weekday) =>
            `${weekday.format("ddd")}.`
          }
          views={["year", "month", "day"]}
          onMonthChange={(date) => changeDate(dayjs(date))}
        />
      </LocalizationProvider>
    </div>
  );
}
