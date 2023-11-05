import { useAppSelector } from "../../store/hooks/redux";
import {
  DISPLAY_LINE,
  LANGS,
} from "../../store/reducer/constants/alcoConstants";

export const Display = () => {
  const alcoState = useAppSelector(
    (state) => state.alcoReducer
  );
  const trs = DISPLAY_LINE.map((key, i) => (
    <tr key={key + i}>
      <th>{LANGS[alcoState.currentLang][key]}</th>
      <td>{alcoState[key]}</td>
    </tr>
  ));

  return (
    <table className='display' data-testid='display'>
      <caption id='caption'>
        {LANGS[alcoState.currentLang].caption}
      </caption>
      <tbody>{trs}</tbody>
    </table>
  );
};
