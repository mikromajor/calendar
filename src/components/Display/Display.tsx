import {
  useAppSelector,
  useAppDispatch,
} from "../../store/hooks/redux";

export const Display = () => {
  const {
    month,
    year,
    totalVodkaPerMonth,
    totalVodkaPerYear,
    totalPureAlcoholPerMonth,
    totalClearAlcoholPerYear,
  } = useAppSelector((state) => state.alcoReducer);

  return (
    <ul className='display'>
      <li>Potoczny miesiąc = {month}</li>
      <li>Potoczny rok = {year} </li>
      <li>
        Iloćś sporzytej wódki za mieśąc ={" "}
        {totalVodkaPerMonth}
      </li>
      <li>
        Iloćś sporzytego spirytusu za mieśąc ={" "}
        {totalPureAlcoholPerMonth}
      </li>
      <li>
        Iloćś sporzytej wódki za rok = {totalVodkaPerYear}
      </li>
      <li>
        Iloćś sporzytego spirytusu za rok ={" "}
        {totalClearAlcoholPerYear}
      </li>
    </ul>
  );
};
