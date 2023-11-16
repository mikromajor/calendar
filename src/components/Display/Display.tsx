import { useAppSelector } from "../../store/hooks/redux";
import {
  DISPLAY_LINE,
  ALCO_CONTENT,
} from "../../store/reducer/constants/alcoConstants";
import { LgsName } from "../../store/reducer/types/alcoTypes";

export const Display = () => {
  const alcoState = useAppSelector(
    (state) => state.alcoReducer
  );
  const lang = alcoState.currentLang;

  const trs = DISPLAY_LINE.map((key, i) => (
    <tr key={key + i}>
      <th>{ALCO_CONTENT[lang][key]}</th>
      <td>{alcoState[key]}</td>
    </tr>
  ));

  return (
    <table
      className='calendar-display'
      data-testid='display'
    >
      <caption id='caption'>
        {ALCO_CONTENT[lang].caption}
      </caption>
      <tbody>{trs}</tbody>
    </table>
  );
};
