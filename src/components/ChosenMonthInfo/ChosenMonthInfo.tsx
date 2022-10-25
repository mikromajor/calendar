import { useState } from "react";
// import {
//   ActionCreatorWithPayload,
//   ActionCreatorWithoutPayload,
// } from "@reduxjs/toolkit";
import {
  useAppSelector,
  useAppDispatch,
} from "../../store/hooks/redux";
import { DisplayVd40 } from "../../ui";

export const ChosenMonthInfo = () => {
  // TODO change to redux and write logics
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
      <DisplayVd40 volume={1} month={month} />
    </>
  );
};
