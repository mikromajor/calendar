import { useAppSelector } from "../../../../store/hooks/redux";
// import { AppLanguages } from "../../../../types/appTypes";
import { ALCO_CONTENT } from "../../../../constants/alcoConstants";
import { getTotalDrankData } from "../../../../store/reducer/alcoHandlers";

export const Display = () => {
  const alcoState = useAppSelector(
    (state) => state.alcoReducer
  );
  const { day, month, year } = alcoState.currentDate;

  //TODO: add enum theme to appConstants
  let theme = "white-theme";

  const { totalForDay, totalForMonth, totalForYear } =
    getTotalDrankData(alcoState);

  const { currentLang } = useAppSelector(
    (state) => state.appReducer
  );

  return (
    <table className='display' data-testid='display'>
      <caption
        id='caption'
        className={`display__header display__header--${theme}`}
      >
        {ALCO_CONTENT[currentLang].caption}
      </caption>
      <tbody>
        <tr className={`display__tr display__tr--${theme}`}>
          <th
            className={`display__th display__th--${theme}`}
          >
            {ALCO_CONTENT[currentLang].lblDay}
            <br />
            {day}
          </th>
          <th
            className={`display__th display__th--${theme}`}
          >
            {ALCO_CONTENT[currentLang].lblMonth}
            <br />
            {month}
          </th>
          <th
            className={`display__th display__th--${theme}`}
          >
            {ALCO_CONTENT[currentLang].lblYear}
            <br />
            {year}
          </th>
        </tr>
        <tr className={`display__tr display__tr--${theme}`}>
          <td
            className={`display__td display__td--${theme}`}
          >
            {totalForDay + " ml"}
          </td>
          <td
            className={`display__td display__td--${theme}`}
          >
            {totalForMonth + " ml"}
          </td>
          <td
            className={`display__td display__td--${theme}`}
          >
            {totalForYear + " ml"}
          </td>
        </tr>
      </tbody>
    </table>
  );
};
