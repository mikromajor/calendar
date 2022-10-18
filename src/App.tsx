import { useState } from "react";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import {
  useAppSelector,
  useAppDispatch,
} from "./store/hooks/redux";
import { alcoActions } from "./store/reducer/alcoReducer/alcoReducer";
import { initChangingState } from "./constants";

function App() {
  const changingStateDispatch = useState(initChangingState);
  const { alcoReducer } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  const {
    additionPercent,
    additionVodka,
    additionVolume,
    subtractionPercent,
    subtractionVolume,
    subtractionVodka,
  } = alcoActions;

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
        onClick={() => dispatch(additionVolume())}
        // onClick={() => setLiters((prev) => (prev += 0.1))}
      >
        Add 0.1 L{" "}
      </button>
      <div>Change volume drink : {liters} L </div>
      <button
        onClick={() =>
          dispatch(
            subtractionVolume({ liters: 0.1, percent: 0 })
          )
        }
        //onClick={() => setLiters((prev) => (prev -= 0.1))}
      >
        Subtract 0.1 L
      </button>

      <button
        onClick={() =>
          dispatch(
            additionPercent({ liters: 0.1, percent: 1 })
          )
        }
        // onClick={() => setPercent((prev) => (prev += 0.1))}
      >
        Add percent +0.1%
      </button>
      <div>Change percent drink : {percent}</div>
      <button
        onClick={() =>
          dispatch(
            subtractionPercent({ liters: 0.1, percent: 1 })
          )
        }
        // onClick={() => setPercent((prev) => (prev -= 0.1))}
      >
        Subtract percent -0.1%
      </button>
      <br />
      <button
        onClick={() => dispatch(additionVodka())}
        // onClick={() => setVodka(handlerQuantityVodka())}
      >
        Add drunk vodka
      </button>
      <div>Liters vodka : {vodka}</div>

      <button
        onClick={() => dispatch(subtractionVodka())}
        // onClick={() => setVodka(handlerQuantityVodka())}
      >
        Add drunk vodka
      </button>
    </>
  );
}
export default App;
