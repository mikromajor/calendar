import {
  NAMES_OF_LANGS,
  ALCO_CONTENT,
} from "../../../../../constants/alcoConstants";
import {
  useAppSelector,
  useAppDispatch,
} from "../../../../../store/hooks/redux";
import { alcoActions } from "../../../../../store/reducer/alcoReducer";
import { Language } from "../../../../../types/alcoTypes";

export const SelectLang = () => {
  const currentLang = useAppSelector(
    (state) => state.alcoReducer.currentLang
  );
  const dispatch = useAppDispatch();

  const { changeLanguage } = alcoActions;

  const Options = NAMES_OF_LANGS.map((langName, i) => (
    <option key={langName + i} value={langName}>
      {langName}
    </option>
  ));

  return (
    <div className='alcoCounter inputBlock selectLang'>
      <label id='lblLang'>
        {ALCO_CONTENT[currentLang].lblLang}
        <select
          id='LANGS'
          defaultValue={currentLang}
          onChange={(e) => {
            dispatch(
              changeLanguage(
                e.currentTarget.value as Language
              )
            );
          }}
        >
          {Options}
        </select>
      </label>
    </div>
  );
};
