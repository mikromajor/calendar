import { useState } from "react";
import { useAppDispatch } from "../../store/hooks/redux";
import { alcoActions } from "../../store/reducer/alcoReducer/alcoReducer";

//TODO : записывать текущий месяц как ключ для хранилища (вместо "водка") используя асинхронщину Time().....

export const Cleaner = () => {
  const [month, setMonth] = useState("01");
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
        placeholder='month: "01" '
        value={month}
        onChange={(e) => setMonth(e.currentTarget.value)}
      />
      <button
        onClick={() => {
          dispatch(clearStorageForMonth(month));
        }}
      >
        Clear storage for the month
      </button>
      <br />
      <button
        onClick={() => {
          dispatch(clearAllStor());
        }}
      >
        Clear all storage data
      </button>
    </>
  );
};
