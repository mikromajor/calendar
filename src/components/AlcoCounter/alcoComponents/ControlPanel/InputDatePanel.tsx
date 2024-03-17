import {
  useAppSelector,
  useAppDispatch,
} from "../../../../store/hooks/redux";
import { alcoActions } from "../../../../store/reducer/alcoReducer";
import { ALCO_CONTENT } from "../../../../constants/alcoConstants";

import { InputDate } from "./Inputs";

export const InputDatePanel = () => {
  const dispatch = useAppDispatch();

  const { day, month, year } = useAppSelector(
    (state) => state.alcoReducer.currentDate
  );
  let theme = "white-theme";
  const { currentLang } = useAppSelector(
    (state) => state.appReducer
  );

  const { changeDay, changeMonth, changeYear } =
    alcoActions;

  return (
    <div className='inputDatePanel'>
      <InputDate
        data={day}
        changeData={changeDay}
        label={ALCO_CONTENT[currentLang].lblDay}
      />

      <InputDate
        data={month}
        changeData={changeMonth}
        label={ALCO_CONTENT[currentLang].lblMonth}
      />
      <InputDate
        data={year}
        changeData={changeYear}
        label={ALCO_CONTENT[currentLang].lblYear}
      />
    </div>
  );
};
