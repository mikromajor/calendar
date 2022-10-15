import { useState } from "react";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import {
  useAppSelector,
  useAppDispatch,
} from "./store/hooks/redux";
import {} from "./store/reducer/alcoReducer/alcoReducer";
import { initChangingState } from "./constants";

function App() {
  const changingStateDispatch = useState(initChangingState);
  const { alcoReducer } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  const [liters, setLiters] = useState(0);
  const [percent, setPercent] = useState(5);
  const [vodka, setVodka] = useState(0);

  const handlerQuantityVodka = () => {
    const spirt = (liters * percent) / 100;
    const vd = spirt * 2.4;
    return vd;
  };

  return (
    <>
      <button
        onClick={() => setLiters((prev) => (prev += 0.1))}
      >
        Add 0.1 L{" "}
      </button>
      <div>Change quantity drink : {liters} L </div>
      <button
        onClick={() => setLiters((prev) => (prev -= 0.1))}
      >
        Subtract 0.1 L
      </button>

      <button
        onClick={() => setPercent((prev) => (prev += 0.1))}
      >
        Add percent +0.1%
      </button>
      <div>Change percent drink : {percent}</div>
      <button
        onClick={() => setPercent((prev) => (prev -= 0.1))}
      >
        Subtract percent -0.1%
      </button>
      <br />
      <button
        onClick={() => setVodka(handlerQuantityVodka())}
      >
        Accept
      </button>
      <div>Liters vodka : {vodka}</div>
    </>
  );
}
export default App;
