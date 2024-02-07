import { useAppDispatch } from "../../../../../store/hooks/redux";
import { alcoActions } from "../../../../../store/reducer/alcoReducer";

const { changeYear } = alcoActions;
type AlcoAction = typeof changeYear;
type PlusMinusProps = {
  callBack: AlcoAction;
  arg: string;
};

export const PlusMinusData = ({
  callBack,
  arg,
}: PlusMinusProps) => {
  const dispatch = useAppDispatch();

  return (
    <div className='buttons_plus_minus'>
      <button
        className='plus'
        onClick={() => {
          dispatch(callBack(arg));
        }}
      >
        +
      </button>
      <button
        className='minus'
        onClick={() => {
          dispatch(callBack("-" + arg));
        }}
      >
        -
      </button>
    </div>
  );
};
