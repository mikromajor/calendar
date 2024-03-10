import { useAppSelector } from "../../../../store/hooks/redux";
// import { AppLanguages } from "../../../../types/appTypes";
import { ALCO_CONTENT } from "../../../../constants/alcoConstants";
import { getTotalDrankData } from "../../../../store/reducer/alcoHandlers";

export const Display = () => {
  const alcoState = useAppSelector(
    (state) => state.alcoReducer
  );
  const { day, month, year } = alcoState.currentDate;

  const { totalForDay, totalForMonth, totalForYear } =
    getTotalDrankData(alcoState);

  const { currentLang } = useAppSelector(
    (state) => state.appReducer
  );

  return (
    <table
      className='alcoCounter-display'
      data-testid='display'
    >
      <caption id='caption'>
        {ALCO_CONTENT[currentLang].caption}
      </caption>
      <tbody>
        <tr>
          <th>
            {ALCO_CONTENT[currentLang].lblDay}
            <br />
            {day}
          </th>
          <th>
            {ALCO_CONTENT[currentLang].lblMonth}
            <br />
            {month}
          </th>
          <th>
            {ALCO_CONTENT[currentLang].lblYear}
            <br />
            {year}
          </th>
        </tr>
        <tr>
          <td>{totalForDay + " ml"}</td>
          <td>{totalForMonth + " ml"}</td>
          <td>{totalForYear + " ml"}</td>
        </tr>
      </tbody>
    </table>
  );
};
