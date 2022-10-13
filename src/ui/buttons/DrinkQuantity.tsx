import { useState } from "react";
import { initChangingState } from "../../constants";
import { useNewDrink } from "../../hooks/useNewDrink";

type Init = typeof initChangingState;

type DrinkQuantityProps = {
  alcoName: string;
};

export const DrinkQuantity = ({
  alcoName,
}: DrinkQuantityProps) => {
  // const { name, liters, percent } = useChangingState({
  //   name:alcoName, liters,
  // })
  return (
    <>
      <button
        onClick={() => {
          // useChangingState(prev=>{ return prev})
        }}
      >
        "-"
      </button>
    </>
  );
};
