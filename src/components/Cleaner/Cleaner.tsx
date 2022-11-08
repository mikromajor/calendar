import { useState } from "react";
import { useAppDispatch } from "../../store/hooks/redux";
import { alcoActions } from "../../store/reducer/alcoReducer";

export const Cleaner = () => {
  const [month, setMonth] = useState("1");
  const dispatch = useAppDispatch();
  const {
    clearAllStor,
    clearStorageForMonth,
    showStorageForMonth,
  } = alcoActions;
  return (
    <div className='calendar-cleaner'>
      <button
        style={{ color: "blue" }}
        onClick={() => {
          dispatch(showStorageForMonth(month));
        }}
      >
        Show storage for the month
      </button>
      <input
        type='text'
        value={month}
        onChange={(e) => setMonth(e.currentTarget.value)}
      />
      <button
        style={{ color: "red" }}
        onClick={() => {
          dispatch(clearStorageForMonth(month));
        }}
      >
        Clear storage for the month
      </button>
      <button
        style={{ color: "red" }}
        onClick={() => {
          dispatch(clearAllStor());
        }}
      >
        Clear all storage data
      </button>
    </div>
  );
};
