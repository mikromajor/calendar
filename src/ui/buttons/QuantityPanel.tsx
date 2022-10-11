import { useState } from "react";
import { initChangingState } from "../../constants";

type Init = typeof initChangingState;

type DrinkQuantityProps = {
  alcoName: string;
  changingStateDispatch: [
    changingState: Init,
    useChangingState: (i: Init) => Init
  ];
};

export const DrinkQuantity = ({
  alcoName,
  changingStateDispatch,
}: DrinkQuantityProps) => {
  const [changingState, useChangingState] =
    changingStateDispatch;

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
