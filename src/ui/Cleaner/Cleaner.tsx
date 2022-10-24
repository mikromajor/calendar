import { useState } from "react";
import { useAppDispatch } from "../../store/hooks/redux";
import { alcoActions } from "../../store/reducer/alcoReducer/alcoReducer";

export const Cleaner = () => {
  const [month, setMonth] = useState("1");
  const dispatch = useAppDispatch();
  const { clearAllStor, clearStorageForMonth } =
    alcoActions;
  return (
    <>
      <br />
      <input
        type='text'
        name=''
        id=''
        placeholder='month: "1" '
        value={month}
        onChange={(e) => setMonth(e.currentTarget.value)}
      />
      <button
        style={{ color: "violet" }}
        onClick={() => {
          dispatch(clearStorageForMonth(month));
        }}
      >
        Clear storage for the month
      </button>
      <br />
      <button
        style={{ color: "red" }}
        onClick={() => {
          dispatch(clearAllStor());
        }}
      >
        Clear all storage data
      </button>
    </>
  );
};
