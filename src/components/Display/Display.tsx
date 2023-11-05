import { useAppSelector } from "../../store/hooks/redux";
import {
  DISPLAY_LINE,
  LANGS,
} from "../../store/reducer/constants/alcoConstants";

export const Display = () => {
  const alcoState = useAppSelector(
    (state) => state.alcoReducer
  );
  console.log(
    "alcoState.currentLang =>",
    alcoState.currentLang
  );
  const trs = DISPLAY_LINE.map((key) => (
    <tr>
      <th>{LANGS[alcoState.currentLang][key]}</th>
      <td>{alcoState[key]}</td>
    </tr>
  ));

  return (
    <table className='display' data-testid='display'>
      <caption>Total drunk</caption>
      <tbody>{trs}</tbody>
    </table>
  );
};
