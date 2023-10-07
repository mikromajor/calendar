import { useAppDispatch } from "../../store/hooks/redux";
import { alcoActions } from "../../store/reducer/alcoReducer";

export const Cleaner = () => {
  const dispatch = useAppDispatch();
  const { clearStorageForYear } = alcoActions;

  return (
    <div className='calendar-cleaner'>
      <button
        style={{ color: "red" }}
        onClick={() => dispatch(clearStorageForYear())}
      >
        {" "}
        Clear storage for current year
      </button>
    </div>
  );
};
