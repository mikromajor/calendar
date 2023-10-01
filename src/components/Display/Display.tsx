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
    totalEthanolPerMonth,
    totalEthanolPerYear,
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
        {totalEthanolPerMonth}
      </li>
      <li>
        Iloćś sporzytej wódki za rok = {totalVodkaPerYear}
      </li>
      <li>
        Iloćś sporzytego spirytusu za rok ={" "}
        {totalEthanolPerYear}
      </li>
    </ul>
  );
};