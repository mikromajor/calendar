import { useState } from "react";
import {
  useAppSelector,
  useAppDispatch,
} from "./store/hooks/redux";
import { beer } from "./store/reducer/alcoReducer/alcoReducer";
import React from "react";

function App() {
  const [incrementAmount, setIncrementAmount] =
    useState("2");
  const incrementValue = Number(incrementAmount) || 0;

  const { alcoReducer } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  // const probnik_1 = {
  //   liters: 1,
  //   percentAlc: 5,
  // }

  return (
    <>
      <h1>Hi!!!</h1>
      <h3>Your calendar waiting you.</h3>
      <input
        value={incrementAmount}
        onChange={(e) => setIncrementAmount(e.target.value)}
      />
      <button onClick={() => dispatch()}>
        {" "}
        Add 1 beer
      </button>

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
