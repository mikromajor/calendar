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
import { DayCalendarSkeleton } from "@mui/x-date-pickers/DayCalendarSkeleton";
import { useAppSelector } from "../../../../store/hooks/redux";
// import { alcoActions } from "../../../../store/reducer/alcoReducer";
// import { getDateMonthYear } from "../../../handlers";
import { Total, Month } from "../../../../types/alcoTypes";
// import {INIT_MONTH} from '../../../../constants/alcoConstants';

function ServerDay(
  props: PickersDayProps<Dayjs> & {
    highlightedDays?: Total[];
  }
) {
  const { outsideCurrentMonth } = props;
  const { currentDate, yearData } = useAppSelector(
    (state) => state.alcoReducer
  );
  const { day, month, year } = currentDate;
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
          ? isSelected.totalVodka.toString() + " ml"
          : undefined
      }
    >
      <PickersDay
        {...props}
        outsideCurrentMonth={props.outsideCurrentMonth}
        day={props.day}
      />
    </Badge>
  );
}

interface CalendarDayInfoProps {
  setVal: React.Dispatch<
    React.SetStateAction<dayjs.Dayjs | null>
  >;
  val: Dayjs | null;
}

export function CalendarDayInfo({
  val,
  setVal,
}: CalendarDayInfoProps) {
  const { currentDate, yearData } = useAppSelector(
    (state) => state.alcoReducer
  );
  const { day, month, year } = currentDate;
  const initialValue = dayjs(
    year + "-" + month + "-" + day
  );
  const [value, setValue] = React.useState<Dayjs | null>(
    dayjs(initialValue)
  );

  const { months } = yearData;
  const isMonthData = months[Number(month)];
  const highlightedDays = !!isMonthData
    ? isMonthData.days
    : [];
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar
        value={val}
        onChange={(newVal) => setVal(newVal)}
        slots={{
          day: ServerDay,
        }}
        slotProps={{
          day: {
            highlightedDays,
          } as any,
        }}
      />
    </LocalizationProvider>
  );
}
