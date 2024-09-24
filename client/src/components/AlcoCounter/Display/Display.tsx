import { useAppSelector } from "store/hooks/redux";

import { ALCO_CONTENT } from "constants/alcoConstants";
import { getTotalDrankData } from "store/reducer/alcoHandlers";
import { useEffect, useState } from "react";

export const Display = () => {
  const alcoState = useAppSelector(
    (state) => state.alcoReducer
  );
  const { currentTheme } = useAppSelector(
    (state) => state.userReducer
  );
  const { day, month, year } = alcoState.currentDate;

  const td = "display__td";

  const [backlight, setBacklight] = useState<string>(
    "display__td--backlightColor"
  );

  const { totalForDay, totalForMonth, totalForYear } =
    getTotalDrankData(alcoState);

  const { currentLang } = useAppSelector(
    (state) => state.userReducer
  );

  useEffect(() => {
    setBacklight("display__td--backlightColor");
    const backlightTimer = setTimeout(() => {
      setBacklight("");
    }, 500);
    return () => clearTimeout(backlightTimer);
  }, [totalForDay]);

  return (
    <table className='display' data-testid='display'>
      <caption
        id='caption'
        className={`display__header display__header--${currentTheme}`}
      >
        {ALCO_CONTENT[currentLang].caption}
      </caption>
      <tbody
        className={`display__body display__body--${currentTheme}`}
      >
        <tr
          className={`display__tr display__tr--${currentTheme}`}
        >
          <th
            className={`display__th display__th--${currentTheme}`}
          >
            {ALCO_CONTENT[currentLang].lblDay}
            <br />
            {day}
          </th>
          <th
            className={`display__th display__th--${currentTheme}`}
          >
            {ALCO_CONTENT[currentLang].lblMonth}
            <br />
            {month}
          </th>
          <th
            className={`display__th display__th--${currentTheme}`}
          >
            {ALCO_CONTENT[currentLang].lblYear}
            <br />
            {year}
          </th>
        </tr>
        <tr
          className={`display__tr display__tr--${currentTheme}`}
        >
          <td
            className={`${td} ${td}--${currentTheme} ${backlight}`}
          >
            {totalForDay + " ml"}
          </td>
          <td
            className={`${td} ${td}--${currentTheme} ${backlight}`}
          >
            {totalForMonth + " ml"}
          </td>
          <td
            className={`${td} ${td}--${currentTheme} ${backlight}`}
          >
            {totalForYear + " ml"}
          </td>
        </tr>
      </tbody>
    </table>
  );
};
