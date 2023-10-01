import { useAppDispatch } from "../../store/hooks/redux";
import { alcoActions } from "../../store/reducer/alcoReducer";

export const Cleaner = () => {
  const dispatch = useAppDispatch();
  const { clearStorageForMonth } = alcoActions;

  return (
    <div className='calendar-cleaner'>
      <button
        style={{ color: "red" }}
        onClick={() => dispatch(clearStorageForMonth())}
      >
        {" "}
        Clear storage for current month
      </button>
    </div>
  );
};
