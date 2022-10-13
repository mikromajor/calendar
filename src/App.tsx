import { useState } from "react";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import {
  useAppSelector,
  useAppDispatch,
} from "./store/hooks/redux";
import { addBeer } from "./store/reducer/alcoReducer/alcoReducer";
import { DrinkQuantity } from "./ui/buttons/DrinkQuantity";
import { initChangingState } from "./constants";
// import { PayloadType } from "./store/reducer/alcoReducer/alcoTypes";

function App() {
  const changingStateDispatch = useState(initChangingState);
  const { alcoReducer } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  return (
    <>
      <DrinkQuantity alcoName='' />
    </>
  );
}
export default App;
