import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { useState } from "react";
import {
  useAppSelector,
  useAppDispatch,
} from "../../store/hooks/redux";
import { PayloadType } from "../../store/reducer/alcoReducer/alcoTypes";

type Props = {
  alcoName: string;
  alcoProportions: number;
  add: ActionCreatorWithPayload<PayloadType, string>;
  subtract: ActionCreatorWithPayload<PayloadType, string>;
};

export const QuantityPanel = (props: Props) => {
  const [quantity, setQuantity] = useState(0);

  const { alcoReducer } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  //TODO переписать логику
  // const drink = {
  //   liters: liters,
  //   percentAlc: percent,
  // };

  return (
    <>
      <h4>{props.alcoName}</h4>
      <button
        onClick={() => {
          setQuantity(
            (prev) => prev + props.alcoProportions
          );
          // dispatch(add());
        }}
      >
        Add to {props.alcoProportions}{" "}
      </button>
      <div>{quantity}</div>
      <button
        onClick={() => {
          setQuantity(
            (prev) => prev - props.alcoProportions
          );
        }}
      >
        Subtract to {props.alcoProportions}
      </button>
    </>
  );
};
