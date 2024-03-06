import { useAppSelector } from "../../../../store/hooks/redux";
// import { AppLanguages } from "../../../../types/appTypes";
import { ALCO_CONTENT } from "../../../../constants/alcoConstants";
import { getTotalDrankData } from "../../../../store/reducer/alcoHandlers";

export const Display = () => {
  const { day, month, year } = useAppSelector(
    (state) => state.alcoReducer.currentDate
  );

  const { totalForDay, totalForMonth, totalForYear } =
    getTotalDrankData();

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
          <th>Display</th>
          <th>{ALCO_CONTENT[currentLang].lblDay}</th>
          <th>{ALCO_CONTENT[currentLang].lblMonth}</th>
          <th>{ALCO_CONTENT[currentLang].lblYear}</th>
        </tr>
        <tr>
          <th>{ALCO_CONTENT[currentLang].lblDate}</th>
          <td>{day}</td>
          <td>{month}</td>
          <td>{year}</td>
        </tr>
        <tr>
          <th>
            {ALCO_CONTENT[currentLang].totalDrankVodka}
          </th>
          <td>{totalForDay}</td>
          <td>{totalForMonth}</td>
          <td>{totalForYear}</td>
        </tr>
      </tbody>
    </table>
  );
};
