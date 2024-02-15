import {
  useAppSelector,
  useAppDispatch,
} from "../../../../../store/hooks/redux";
import { alcoActions } from "../../../../../store/reducer/alcoReducer";
import { ALCO_CONTENT } from "../../../../../store/reducer/constants/alcoConstants";
import {
  ActionsChangeData,
  AlcoContentLangData,
} from "../../../../../store/reducer/types/alcoTypes";
import { PlusMinusDate } from "../Buttons";

type InputDataProps = {
  data: string;
  changeData: ActionsChangeData;
  label: AlcoContentLangData;
};

export const InputDate = ({
  data,
  changeData,
  label,
}: InputDataProps) => {
  const { currentLang } = useAppSelector(
    (state) => state.alcoReducer
  );
  const dispatch = useAppDispatch();

  return (
    <div className='alcoCounter inputBlock'>
      <label id={label}>
        {ALCO_CONTENT[currentLang][label]}
        <input
          type='number'
          value={data}
          onChange={(e) => {
            const newData = e.target.value;
            Number(newData) > -1 &&
              dispatch(changeData(newData));
          }}
        />
      </label>
      <PlusMinusDate
        callBack={changeData}
        step={1}
        value={Number(data)}
      />
    </div>
  );
};
