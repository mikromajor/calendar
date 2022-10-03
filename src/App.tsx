import { useState } from "react";
import {
  useAppSelector,
  useAppDispatch,
} from "./store/hooks/redux";
import { beer } from "./store/reducer/alcoReducer/alcoReducer";
import React from "react";
import { PayloadType } from "./store/reducer/alcoReducer/alcoTypes";

function App() {
  const [liters, setLiters] = useState("1");
  const [percent, setPercent] = useState("5");

  const { alcoReducer } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  const drink = {
    liters: liters,
    percentAlc: percent,
  };
  return (
    <>
      <h2>You drunk</h2>
      <h2>Volume - {liters}</h2>
      <h2>Percent - {percent}</h2>
      <input
        value={liters}
        onChange={(e) => setLiters(e.target.value)}
      />
      <input
        value={percent}
        onChange={(e) => setPercent(e.target.value)}
      />
      <button onClick={() => dispatch(beer(drink))}>
        Click to add beer
      </button>
      <h1>You total drunk beer - {alcoReducer.beer}</h1>
      <h1>
        You total drunk alcohol - {alcoReducer.totalVodka}
      </h1>
      {/* <label htmlFor='kindOfAlc'>
        Choose a drink:
        <select name='kindOfAlc' id='alc'>
          <option value={KindOfDrunkAlcohol.BEER}>
            {KindOfDrunkAlcohol.BEER}
          </option>
          <option value={KindOfDrunkAlcohol.VINE}>
            {KindOfDrunkAlcohol.VINE}
          </option>
          <option value={KindOfDrunkAlcohol.HEIGHT_ALC}>
            {KindOfDrunkAlcohol.HEIGHT_ALC}
          </option>
          <option value={KindOfDrunkAlcohol.OTHERS}>
            {KindOfDrunkAlcohol.OTHERS}
          </option>
        </select>
      </label>
      <input type='number' placeholder='quantity drunk' />
      <input type='number' placeholder='percent alcohol' /> */}
    </>
  );
}
export default App;
