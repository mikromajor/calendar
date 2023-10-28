import { useAppSelector } from "../../store/hooks/redux";

export const Display = () => {
  const {
    currentMonth,
    currentYear,
    sumEthanolPerMonth,
    sumEthanolPerYear,
    sumVodkaPerMonth,
    sumVodkaPerYear,
  } = useAppSelector((state) => state.alcoReducer);

  return (
    <ul className='display' data-testid='display'>
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
