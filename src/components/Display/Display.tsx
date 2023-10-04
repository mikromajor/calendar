import {
  useAppSelector,
  useAppDispatch,
} from "../../store/hooks/redux";

export const Display = () => {
  const {
    currentMonth,
    currentYear,
    sumEthanolPerMonth,
    sumEthanolPerYear,
  } = useAppSelector((state) => state.alcoReducer);

  const sumVodkaPerMonth = sumEthanolPerMonth * 2.4;
  const sumVodkaPerYear = sumEthanolPerYear * 2.4;

  return (
    <ul className='display'>
      <li>Potoczny miesiąc = {currentMonth}</li>
      <li>Potoczny rok = {currentYear} </li>
      <li>
        Iloćś sporzytej wódki za mieśąc = {sumVodkaPerMonth}
      </li>
      <li>
        Iloćś sporzytego spirytusu za mieśąc ={" "}
        {sumEthanolPerMonth}
      </li>
      <li>
        Iloćś sporzytej wódki za rok = {sumVodkaPerYear}
      </li>
      <li>
        Iloćś sporzytego spirytusu za rok ={" "}
        {sumEthanolPerYear}
      </li>
    </ul>
  );
};
