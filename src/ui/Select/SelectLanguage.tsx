import { NAMES_OF_LANGS } from "../../constants/alcoConstants";
import { APP_CONTENT } from "../../constants/appConstants";
import {
  useAppSelector,
  useAppDispatch,
} from "../../store/hooks/redux";
import { appActions } from "./../../store/reducer/appReducer";
import { Language } from "../../types/alcoTypes";

export const SelectLanguage = () => {
  const currentLang = useAppSelector(
    (state) => state.appReducer.currentLang
  );
  const dispatch = useAppDispatch();

  const { changeLanguage } = appActions;

  const Options = NAMES_OF_LANGS.map((langName, i) => (
    <option key={langName + i} value={langName}>
      {langName}
    </option>
  ));

  return (
    <div className='selectLang'>
      <label id='lblLang'>
        {APP_CONTENT[currentLang].lblLang}
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
