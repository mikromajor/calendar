import { useAppDispatch } from "../../../../store/hooks/redux";
import { alcoActions } from "../../../../store/reducer/alcoReducer";

export const Cleaner = () => {
  const dispatch = useAppDispatch();
  const { clearStorageForYear } = alcoActions;

  return (
    <div
      className='alcoCounter-cleaner'
      data-testid='cleaner'
    >
      <button
        style={{ color: "red" }}
        onClick={() => dispatch(clearStorageForYear())}
      >
        {" "}
        Delete alcohol history for the current year
      </button>
    </div>
  );
};
