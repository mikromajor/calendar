import dayjs, { Dayjs } from "dayjs";
import { MobileDatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { getSalary } from "../../store/reducer/http/salaryActions";
import {
  useAppDispatch,
  useAppSelector,
} from "../../store/hooks/redux";

export function MobileCalendar() {
  const dispatch = useAppDispatch();

  const changeDate = (date: Dayjs | null) => {
    if (!date) return;
    const month = date.month() + 1;
    const year = date.year();

    dispatch(getSalary({ year, month }));
  };
  const { isLoading } = useAppSelector(
    (store) => store.serviceReducer
  );

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <MobileDatePicker
        label='Date'
        views={["month", "year"]}
        openTo='month'
        defaultValue={dayjs(new Date())}
        onChange={changeDate}
        disabled={isLoading}
      />
    </LocalizationProvider>
  );
}
