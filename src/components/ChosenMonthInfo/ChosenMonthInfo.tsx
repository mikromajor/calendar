import { useState } from "react";
import {
  ActionCreatorWithPayload,
  ActionCreatorWithoutPayload,
} from "@reduxjs/toolkit";
import {
  useAppSelector,
  useAppDispatch,
} from "../../store/hooks/redux";
import { alcoActions } from "../../store/reducer/alcoReducer";
import { getCurrentMonth } from "../../store/reducer/getCurrentMonth";

export const ChosenMonthInfo = () => {
  const [month, setMonth] = useState("");
  return (
    <>
      <h3>Information for the month</h3>
      <input
        type='text'
        placeholder='enter num month '
        value={month}
        onChange={(e) => setMonth(e.currentTarget.value)}
      />
    </>
  );
};
