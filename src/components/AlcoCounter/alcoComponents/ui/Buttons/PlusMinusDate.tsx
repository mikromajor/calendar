import { useAppDispatch } from "../../../../../store/hooks/redux";
import { ActionsChangeData } from "../../../../../store/reducer/types/alcoTypes";

type PlusMinusProps = {
  callBack: ActionsChangeData;
  step: number;
  value: number;
};

export const PlusMinusDate = ({
  callBack,
  step,
  value,
}: PlusMinusProps) => {
  const dispatch = useAppDispatch();

  return (
    <div className='alcoCounter-block_plus_minus'>
      <button
        className='plus'
        onClick={() => {
          dispatch(callBack((value + step).toString()));
        }}
      >
        +
      </button>
      <button
        className='minus'
        onClick={() => {
          dispatch(callBack((value - step).toString()));
        }}
      >
        -
      </button>
    </div>
  );
};
